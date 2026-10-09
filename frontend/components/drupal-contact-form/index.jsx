'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const initialValues = { name: '', mail: '', subject: '', message: '' };

const DrupalContactForm = ({ formId, title, submitLabel = 'Send message' }) => {
  const pathname = usePathname() || '/en';
  const locale = pathname.split('/')[1] === 'es' ? 'es' : 'en';
  const [values, setValues] = useState(initialValues);
  const [formTitle, setFormTitle] = useState(title || '');
  const [status, setStatus] = useState({ type: '', text: '' });

  useEffect(() => {
    if (!formId) return undefined;

    const controller = new AbortController();
    fetch(`/api/drupal/contact/${encodeURIComponent(formId)}?lang=${locale}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || 'Unable to load the form.');
        return payload;
      })
      .then((payload) => setFormTitle(title || payload.label))
      .catch((reason) => {
        if (reason.name !== 'AbortError') setStatus({ type: 'error', text: reason.message });
      });

    return () => controller.abort();
  }, [formId, locale, title]);

  const update = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch(`/api/drupal/contact/${encodeURIComponent(formId)}?lang=${locale}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Unable to send the message.');
      setValues(initialValues);
      setStatus({ type: 'success', text: payload.message || 'Message sent.' });
    } catch (reason) {
      setStatus({ type: 'error', text: reason.message });
    }
  };

  if (!formId) return null;

  return (
    <form className="max-w-2xl space-y-4" onSubmit={submit}>
      {formTitle ? <h2 className="text-2xl font-semibold">{formTitle}</h2> : null}
      {['name', 'mail', 'subject'].map((field) => (
        <label key={field} className="block space-y-1">
          <span className="text-sm font-semibold capitalize">{field === 'mail' ? 'Email' : field}</span>
          <input
            required
            name={field}
            type={field === 'mail' ? 'email' : 'text'}
            value={values[field]}
            onChange={update}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2"
          />
        </label>
      ))}
      <label className="block space-y-1">
        <span className="text-sm font-semibold">Message</span>
        <textarea
          required
          name="message"
          rows="5"
          value={values.message}
          onChange={update}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2"
        />
      </label>
      {status.text ? (
        <p role={status.type === 'error' ? 'alert' : 'status'}>{status.text}</p>
      ) : null}
      <button type="submit" className="rounded-md bg-[#0050A4] px-5 py-2 font-semibold text-white">
        {submitLabel}
      </button>
    </form>
  );
};

export default DrupalContactForm;
