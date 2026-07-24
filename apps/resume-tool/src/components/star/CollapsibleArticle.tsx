import type { ReactNode } from "react";

type CollapsibleArticleProps = {
  id: string;
  defaultOpen?: boolean;
  borderClassName?: string;
  summary: ReactNode;
  children: ReactNode;
};

export function CollapsibleArticle({
  id,
  defaultOpen = false,
  borderClassName = "border-gray-200",
  summary,
  children,
}: CollapsibleArticleProps) {
  return (
    <details
      id={id}
      open={defaultOpen}
      className={`group rounded-xl border bg-white shadow-sm scroll-mt-24 ${borderClassName}`}
    >
      <summary className="cursor-pointer list-none p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">{summary}</div>
          <span
            className="mt-1 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
            aria-hidden
          >
            ▾
          </span>
        </div>
      </summary>
      <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
        {children}
      </div>
    </details>
  );
}
