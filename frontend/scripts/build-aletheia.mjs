import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const frontendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const aletheiaRoot = path.join(frontendRoot, 'vendor/aletheia-2-core');
const outputFile = path.join(
  aletheiaRoot,
  'packages/stencil-library/components/ath-button.js',
);
const reactOutputFile = path.join(
  aletheiaRoot,
  'packages/react-library/dist/components/stencil-generated/components.js',
);
const metadataManifest = path.join(
  aletheiaRoot,
  'packages/stencil-library/dist/metadata/dev/aletheia.metadata.json',
);
const cssFile = path.join(
  aletheiaRoot,
  'packages/stencil-library/dist/aletheia/aletheia.css',
);
const assetsSource = path.join(
  aletheiaRoot,
  'packages/stencil-library/dist/aletheia/assets',
);
const assetsDestination = path.join(frontendRoot, 'public/aletheia/assets');
const cssDestination = path.join(frontendRoot, 'public/aletheia/aletheia.css');

const run = (command, args) => {
  const result = spawnSync(command, args, {
    cwd: aletheiaRoot,
    stdio: 'inherit',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};


if (!existsSync(aletheiaRoot)) {
  throw new Error(`Aletheia source repository not found at ${aletheiaRoot}.`);
}

if (!existsSync(path.join(aletheiaRoot, 'node_modules'))) {
  run('npm', ['ci', '--ignore-scripts']);
}

const needsStencilBuild =
  !existsSync(outputFile) ||
  !existsSync(cssFile) ||
  !existsSync(assetsSource) ||
  !existsSync(metadataManifest);

if (needsStencilBuild) {
  run('npm', ['run', 'build:stencil']);
}

if (needsStencilBuild || !existsSync(reactOutputFile)) {
  run('npm', ['run', 'build:react']);
}

mkdirSync(assetsDestination, { recursive: true });
cpSync(assetsSource, assetsDestination, { recursive: true });
cpSync(cssFile, cssDestination);

console.log('Aletheia build is available for the Canvas wrappers.');
