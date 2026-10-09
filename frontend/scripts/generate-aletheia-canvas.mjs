import fs from 'node:fs';
import path from 'node:path';

const frontendRoot = path.resolve(new URL('..', import.meta.url).pathname);
const stencilRoot = path.join(frontendRoot, 'vendor/aletheia-2-core/packages/stencil-library');
const sourceRoot = path.join(stencilRoot, 'src/components');
const builtComponentsRoot = path.join(stencilRoot, 'components');
const distMetadataRoot = path.join(stencilRoot, 'dist/metadata');
const typeDefinitionsPath = path.join(stencilRoot, 'dist/types/components.d.ts');
const outputRoot = path.join(frontendRoot, 'components');
const manifestPath = path.join(distMetadataRoot, 'dev/aletheia.metadata.json');

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const walk = (directory) => {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(entryPath));
    else files.push(entryPath);
  }
  return files;
};

const quote = (value) => JSON.stringify(String(value));

const humanize = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/^./, (letter) => letter.toUpperCase());

const pascalCase = (value) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const camelCase = (value) => {
  const result = value.replace(/[-_]+(.)/g, (_, letter) => letter.toUpperCase());
  return result.charAt(0).toLowerCase() + result.slice(1);
};

const componentDisplayName = (tag) => `Aletheia ${humanize(tag.replace(/^ath-/, ''))}`;

const componentMachineName = (tag) => `aletheia-${tag.replace(/^ath-/, '')}`;

// Canvas can compose components in slots, but it cannot edit a plain text
// node inside a slot as a component prop. These controls expose a wrapper-only
// text prop while preserving the original Aletheia slot.
const TEXT_SLOT_COMPONENTS = new Map([
  ['ath-button', 'Button'],
  ['ath-button-link', 'Button link'],
  ['ath-button-expandable', 'Button expandable'],
  ['ath-button-float', 'Button float'],
]);

const CANVAS_EXAMPLES = {
  'ath-button': {
    icon: '',
    iconPosition: 'none',
    size: 'md',
  },
  'ath-button-link': {
    icon: '',
    size: 'md',
  },
  'ath-button-expandable': {
    icon: '',
    size: 'lg',
  },
  'ath-button-float': {
    icon: '',
    iconPosition: 'none',
    size: 'sm',
  },
  'ath-accordion-item': {
    icon: '',
  },
};

const sourceFiles = walk(sourceRoot).filter(
  (filePath) => filePath.endsWith('.tsx') && !filePath.includes('/stories/') && !filePath.includes('/test/'),
);

const sourceByTag = new Map();
for (const filePath of sourceFiles) {
  const source = fs.readFileSync(filePath, 'utf8');
  const match = source.match(/tag\s*:\s*['"](ath-[^'"]+)['"]/);
  if (match) sourceByTag.set(match[1], { filePath, source });
}

const typeDefinitions = fs.readFileSync(typeDefinitionsPath, 'utf8');

const fallbackPropsForTag = (tag) => {
  const interfaceName = `Ath${pascalCase(tag.replace(/^ath-/, ''))}`;
  const interfaceStart = typeDefinitions.indexOf(`interface ${interfaceName} {`);
  if (interfaceStart === -1) return [];

  const interfaceEnd = typeDefinitions.indexOf('\n    }', interfaceStart);
  const block = typeDefinitions.slice(interfaceStart, interfaceEnd === -1 ? undefined : interfaceEnd);
  const props = [];
  const propertyPattern = /^\s+"([^"]+)"\??:\s*([^;]+);/gm;
  let match;
  while ((match = propertyPattern.exec(block))) {
    const [, name, type] = match;
    if (type.includes('=>') || name.startsWith('Is')) continue;
    const beforeProperty = block.slice(0, match.index);
    const docsStart = beforeProperty.lastIndexOf('/**');
    const docsMatch = docsStart === -1 ? undefined : beforeProperty.slice(docsStart).match(/\/\*\*([\s\S]*?)\*\/\s*$/);
    const docLines = docsMatch?.[1]
      ?.split('\n')
      .map((line) => line.replace(/^\s*\*\/?\s?/, '').trim())
      .filter(Boolean);
    const docs = docLines?.filter((line) => !line.startsWith('@default')).join(' ');
    const defaultLine = docLines?.find((line) => line.startsWith('@default'));
    props.push({ name, type, docs, default: defaultLine?.replace(/^@default\s+/, '') });
  }
  return props;
};

const normalizeProp = (prop) => {
  const values = (prop.values ?? [])
    .map((entry) => entry.value)
    .filter((value) => typeof value === 'string' || typeof value === 'number');
  const type = String(prop.type ?? 'string');

  if (values.length) return { ...prop, canvasType: typeof values[0] === 'number' ? 'number' : 'string', values };
  if (/\bboolean\b/.test(type) && !/string/.test(type)) return { ...prop, canvasType: 'boolean' };
  if (/\bnumber\b/.test(type) && !/string/.test(type)) return { ...prop, canvasType: 'number' };
  if (/\[\]|Array</.test(type)) return { ...prop, canvasType: 'string', jsonValue: '[]' };
  if (/\bobject\b|Record<|Map<|\{/.test(type)) return { ...prop, canvasType: 'object', jsonValue: '{}' };
  return { ...prop, canvasType: 'string' };
};

const simpleDefault = (value) => {
  if (value === undefined || value === null) return undefined;
  const normalized = String(value).trim();
  if (normalized === '') return undefined;
  if (normalized === 'true' || normalized === 'false') return normalized === 'true';
  if (/^-?\d+(\.\d+)?$/.test(normalized)) return Number(normalized);
  const quoted = normalized.match(/^['"](.*)['"]$/);
  if (!quoted || quoted[1].trim() === '') return undefined;
  return quoted[1];
};

const exampleForProp = (prop, tag) => {
  if (prop.example !== undefined) return prop.example;
  if (prop.name === 'icon') return undefined;
  if (CANVAS_EXAMPLES[tag]?.[prop.name] !== undefined) return CANVAS_EXAMPLES[tag][prop.name];
  if (prop.values?.length) return prop.values[0];
  const defaultValue = simpleDefault(prop.default);
  if (
    prop.canvasType === 'number' &&
    /^(width|height|maxWidth|minWidth|maxHeight|minHeight|tooltipWidth)$/i.test(prop.name) &&
    (defaultValue === undefined || defaultValue === 0)
  ) {
    return 240;
  }
  if (defaultValue !== undefined) return defaultValue;
  if (prop.jsonValue) return prop.jsonValue;
  if (prop.canvasType === 'boolean') return false;
  if (prop.canvasType === 'number') {
    if (/^(width|height|maxWidth|minWidth|maxHeight|minHeight|tooltipWidth)$/i.test(prop.name)) return 240;
    if (prop.name === 'headingLevel') return 4;
    if (prop.name === 'step') return 1;
    if (/^max/i.test(prop.name)) return 100;
    return 0;
  }
  if (/^(width|height)$/i.test(prop.name)) return '100%';
  if (/^(max|min)(width|height)$/i.test(prop.name)) return '240px';
  if (prop.name === 'value' && tag === 'ath-slider') return '0';
  if (/href|url|link/i.test(prop.name)) return '/example';
  if (prop.name === 'id' || /Id$|identifier/i.test(prop.name)) return 'example-id';
  return `Example ${humanize(prop.name).toLowerCase()}`;
};

const parseSlots = (source) => {
  const names = new Set();
  const slotPattern = /<slot(?:\s+name\s*=\s*["']([^"']+)["'])?/g;
  let match;
  while ((match = slotPattern.exec(source))) names.add(match[1] || 'content');
  return [...names].map((nativeName) => ({
    nativeName,
    propName: nativeName === 'content' ? 'content' : camelCase(nativeName),
  }));
};

const propsFor = ({ tag, metadata }) => (metadata?.props ?? fallbackPropsForTag(tag)).map(normalizeProp);

const textSlotPropFor = ({ tag, props, slots }) => {
  if (!TEXT_SLOT_COMPONENTS.has(tag) || !slots.some(({ nativeName }) => nativeName === 'content')) {
    return undefined;
  }

  if (props.some(({ name }) => name === 'text')) return undefined;

  return {
    name: 'text',
    title: 'Text',
    type: 'string',
    canvasType: 'string',
    example: TEXT_SLOT_COMPONENTS.get(tag),
  };
};

const yamlFor = ({ tag, props, source }) => {
  const slots = parseSlots(source?.source ?? '');
  const lines = [
    `name: ${componentDisplayName(tag)}`,
    `machineName: ${componentMachineName(tag)}`,
    'status: true',
    'required: []',
    'props:',
    '  properties:',
  ];

  if (!props.length) lines.push('    {}');
  for (const prop of props) {
    lines.push(`    ${prop.name}:`);
    lines.push(`      title: ${humanize(prop.name)}`);
    lines.push(`      type: ${prop.canvasType}`);
    if (prop.canvasType === 'string' && /href|url|link/i.test(prop.name) && !prop.values?.length) {
      lines.push('      format: uri-reference');
    }
    const example = exampleForProp(prop, tag);
    if (example !== undefined) {
      lines.push('      examples:');
      if (typeof example === 'boolean' || typeof example === 'number') lines.push(`        - ${example}`);
      else if (example === '[]' || example === '{}') lines.push(`        - ${example}`);
      else lines.push(`        - ${quote(example)}`);
    }
    if (prop.values?.length) {
      lines.push('      enum:');
      for (const value of prop.values) lines.push(`        - ${typeof value === 'number' ? value : quote(value)}`);
      lines.push('      meta:enum:');
      for (const value of prop.values) lines.push(`        ${String(value).replace(/:/g, '_')}: ${quote(humanize(String(value)))}`);
    }
  }

  lines.push('slots:');
  if (!slots.length) lines.push('  {}');
  for (const slot of slots) {
    lines.push(`  ${slot.propName}:`);
    lines.push(`    title: ${humanize(slot.propName)}`);
  }
  return `${lines.join('\n')}\n`;
};

const wrapperFor = ({ tag, props, slots, slotTextProp }) => {
  const reactComponentName = `Ath${pascalCase(tag.replace(/^ath-/, ''))}`;
  const slotLiteral = slots.length
    ? `[${slots.map(({ propName, nativeName }) => `{ propName: ${quote(propName)}, nativeName: ${quote(nativeName)} }`).join(', ')}]`
    : '[]';
  const functionName = pascalCase(componentMachineName(tag));
  const propTypes = JSON.stringify(Object.fromEntries(props.map((prop) => [prop.name, prop.canvasType])));
  return `'use client';\n\nimport dynamic from 'next/dynamic';\nimport AletheiaElement from '@/lib/aletheia/element';\n\nconst ${functionName} = dynamic(\n  () => import('@/lib/aletheia/client-components').then(({ ${reactComponentName} }) => {\n    const Component = (props) => (\n      <AletheiaElement\n        {...props}\n        component={${reactComponentName}}\n        propTypes={${propTypes}}\n        slotNames={${slotLiteral}}\n        slotTextProp={${slotTextProp ? quote(slotTextProp) : 'undefined'}}\n        slotTextDefault={${slotTextProp ? quote(TEXT_SLOT_COMPONENTS.get(tag)) : 'undefined'}}\n      />\n    );\n    Component.displayName = '${functionName}';\n    return Component;\n  }),\n  { ssr: false },\n);\n\nexport default ${functionName};\n`;
};

if (!fs.existsSync(manifestPath)) {
  throw new Error(`Aletheia metadata not found at ${manifestPath}. Run npm run aletheia:build first.`);
}

const manifest = readJson(manifestPath);
const builtTags = fs
  .readdirSync(builtComponentsRoot)
  .filter((fileName) => fileName.startsWith('ath-') && fileName.endsWith('.js'))
  .map((fileName) => fileName.slice(0, -3))
  .sort();

let generated = 0;
for (const tag of builtTags) {
  const manifestEntry = manifest.components[tag];
  const metadataPath = manifestEntry?.artifacts?.dev
    ? path.join(distMetadataRoot, manifestEntry.artifacts.dev)
    : undefined;
  const metadata = metadataPath && fs.existsSync(metadataPath) ? readJson(metadataPath) : undefined;
  const source = sourceByTag.get(tag);
  const props = propsFor({ tag, metadata });
  const slots = parseSlots(source?.source ?? '');
  const textSlotProp = textSlotPropFor({ tag, props, slots });
  const allProps = textSlotProp ? [...props, textSlotProp] : props;
  const directory = path.join(outputRoot, componentMachineName(tag));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.jsx'), wrapperFor({ tag, props: allProps, slots, slotTextProp: textSlotProp?.name }));
  fs.writeFileSync(path.join(directory, 'component.yml'), yamlFor({ tag, props: allProps, source }));
  generated += 1;
}

console.log(`Generated ${generated} Aletheia Canvas components in ${path.relative(frontendRoot, outputRoot)}.`);
