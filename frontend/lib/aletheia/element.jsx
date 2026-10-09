'use client';

import { cloneElement, createElement, isValidElement } from 'react';

const RESERVED_PROPS = new Set([
  'children',
  'className',
  'id',
  'role',
  'style',
  'title',
]);

const coercePropValue = (value, type) => {
  if (type === 'number') {
    if (typeof value === 'number') return value;
    const number = Number(value);
    return Number.isFinite(number) ? number : value;
  }

  if (type === 'boolean') {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    if (value === 0 || value === 1) return Boolean(value);
  }

  if (type === 'object' && typeof value === 'string') {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  return value;
};

const isAttribute = (name) =>
  name.startsWith('aria-') ||
  name.startsWith('data-') ||
  name === 'dir' ||
  name === 'lang' ||
  name === 'slot' ||
  name === 'tabIndex';

const renderSlottedChildren = (value, slotName) => {
  return Array.isArray(value) ? value.map((child, index) => renderSlottedChild(child, slotName, index)) : renderSlottedChild(value, slotName, 0);
};

const renderSlottedChild = (child, slotName, index) => {
  if (isValidElement(child)) {
    return cloneElement(child, { key: child.key ?? `${slotName}-${index}`, slot: slotName });
  }

  return createElement('span', { key: `${slotName}-${index}`, slot: slotName }, child);
};

export default function AletheiaElement({
  component: Component,
  propTypes = {},
  slotNames = [],
  slotTextProp,
  slotTextDefault,
  children,
  ...props
}) {
  const slotPropNames = new Set(slotNames.map(({ propName }) => propName));
  const defaultSlot = slotNames.find(({ propName }) => propName === 'content');
  const slotText = slotTextProp
    ? props[slotTextProp] ?? slotTextDefault
    : undefined;
  const hasSlotText = typeof slotText === 'string'
    ? slotText.trim().length > 0
    : slotText !== undefined && slotText !== null;
  const renderedChildren = defaultSlot
    ? hasSlotText ? slotText : props[defaultSlot.propName]
    : children;
  const elementProps = {};

  for (const [name, value] of Object.entries(props)) {
    if (slotPropNames.has(name) || name === slotTextProp || value === undefined || value === null) {
      continue;
    }

    elementProps[name] = isAttribute(name) || RESERVED_PROPS.has(name)
      ? value
      : coercePropValue(value, propTypes[name]);
  }

  elementProps.className = [
    'nttdata-aletheia-component',
    elementProps.className,
  ].filter(Boolean).join(' ');

  const slottedChildren = slotNames
    .filter(({ propName }) => propName !== 'content' && props[propName] !== undefined && props[propName] !== null)
    .flatMap(({ propName, nativeName }) => renderSlottedChildren(props[propName], nativeName));

  return createElement(Component, elementProps, renderedChildren, ...slottedChildren);
}
