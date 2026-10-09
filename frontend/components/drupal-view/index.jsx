'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import CanvasComponentTree from '@drupal-canvas/headless-next/CanvasComponentTree';

const valueToText = (value) => {
  if (value === null || value === undefined) return '';
  if (Array.isArray(value)) return value.map(valueToText).join(', ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

const parseObject = (value) => {
  if (!value) return {};
  if (typeof value === 'object' && !Array.isArray(value)) return value;

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};

const resolveValue = (item, source) => {
  if (typeof source !== 'string') return source;
  if (source.startsWith('literal:')) return source.slice('literal:'.length);

  const normalizedSource = source.startsWith('fields.') ? source.slice(7) : source;
  const value = normalizedSource.split('.').reduce((current, key) => {
    if (current === null || current === undefined) return undefined;
    return current[key];
  }, item.fields);

  return value;
};

const coerceValue = (value, type) => {
  if (!type || value === null || value === undefined) return value;

  if (type === 'number' || type === 'integer') {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return undefined;
    return type === 'integer' ? Math.trunc(parsed) : parsed;
  }

  if (type === 'boolean') {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'number') return value !== 0;
    const normalized = String(value).trim().toLowerCase();
    if (['true', '1', 'yes', 'on'].includes(normalized)) return true;
    if (['false', '0', 'no', 'off', ''].includes(normalized)) return false;
    return undefined;
  }

  if (type === 'string') return String(value);
  return value;
};

const normalizeComponentElement = (component) => {
  const value = String(component || '').trim();
  if (value.startsWith('js-')) return value;
  if (value.startsWith('js.')) return `js-${value.slice(3)}`;
  return `js-${value}`;
};

const mappedProps = (item, mapping, staticProps) => {
  const configuredMapping = parseObject(mapping);
  const props = { ...parseObject(staticProps) };

  Object.entries(configuredMapping).forEach(([propName, source]) => {
    const descriptor = source && typeof source === 'object' && !Array.isArray(source)
      ? source
      : null;
    const configuredSource = descriptor
      ? (descriptor.source ?? descriptor.field ?? descriptor.path)
      : source;
    const value = coerceValue(resolveValue(item, configuredSource), descriptor?.type);
    if (value !== undefined) props[propName] = value;
  });

  return props;
};

const DrupalView = ({
  viewId,
  displayId = 'default',
  limit = 20,
  title,
  itemComponent,
  mapping,
  staticProps,
}) => {
  const pathname = usePathname() || '/en';
  const locale = pathname.split('/')[1] === 'es' ? 'es' : 'en';
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!viewId) return undefined;

    const controller = new AbortController();
    const parsedLimit = Math.min(100, Math.max(1, Number(limit) || 20));
    fetch(
      `/api/drupal/views/${encodeURIComponent(viewId)}/${encodeURIComponent(displayId)}?lang=${locale}&limit=${parsedLimit}`,
      { signal: controller.signal },
    )
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || 'Unable to load the view.');
        return payload;
      })
      .then(setData)
      .catch((reason) => {
        if (reason.name !== 'AbortError') setError(reason.message);
      });

    return () => controller.abort();
  }, [displayId, limit, locale, viewId]);

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (!data) {
    return <p aria-live="polite">Loading…</p>;
  }

  if (itemComponent) {
    return (
      <section aria-label={title || viewId} className="space-y-4">
        {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
        {data.items.length === 0 ? (
          <p>No results.</p>
        ) : (
          <div className="space-y-4">
            {data.items.map((item) => (
              <CanvasComponentTree
                key={item.id}
                tree={{
                  element: normalizeComponentElement(itemComponent),
                  props: mappedProps(item, mapping, staticProps),
                }}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section aria-label={title || viewId} className="space-y-4">
      {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
      {data.items.length === 0 ? (
        <p>No results.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {data.items.map((item) => (
            <li key={item.id} className="rounded-lg border border-slate-200 bg-white p-4">
              <dl className="space-y-2">
                {Object.entries(item.fields).map(([fieldId, value]) => (
                  <div key={fieldId}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {fieldId}
                    </dt>
                    <dd className="text-slate-900">{valueToText(value)}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default DrupalView;
