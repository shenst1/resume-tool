"use client";

import { useCallback, useState } from "react";

type OutreachEmailBoxProps = {
  subject: string;
  body: string;
  /** Short note above the draft (e.g. 3rd-tier LinkedIn). */
  label?: string;
};

export function OutreachEmailBox({ subject, body, label }: OutreachEmailBoxProps) {
  const [copied, setCopied] = useState(false);
  const clipboardText = `Subject: ${subject}\n\n${body}`;

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(clipboardText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [clipboardText]);

  return (
    <aside
      className="no-print mb-6 rounded-lg border border-amber-200 bg-amber-50/90 p-4 shadow-sm print:hidden"
      aria-label="Outreach email draft (hidden when printing)"
    >
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">
            Outreach draft
          </p>
          {label && <p className="mt-0.5 text-sm text-amber-950/80">{label}</p>}
        </div>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-md border border-amber-300 bg-white px-3 py-1.5 text-sm font-medium text-amber-950 shadow-sm hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
        >
          {copied ? "Copied" : "Copy to clipboard"}
        </button>
      </div>
      <p className="mb-2 text-xs font-medium text-amber-900/90">Subject</p>
      <p className="mb-3 rounded border border-amber-100 bg-white/80 px-3 py-2 text-sm text-gray-800">
        {subject}
      </p>
      <p className="mb-2 text-xs font-medium text-amber-900/90">Body</p>
      <pre className="whitespace-pre-wrap rounded border border-amber-100 bg-white/80 px-3 py-2 font-sans text-sm leading-relaxed text-gray-800">
        {body}
      </pre>
    </aside>
  );
}
