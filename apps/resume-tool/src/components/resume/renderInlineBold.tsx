import type { ReactNode } from "react";

/**
 * Turns `**segments**` into <strong>. Intentionally not full Markdown—keeps resume
 * copy lightweight without pulling in a parser.
 */
export function renderInlineBold(text: string): ReactNode {
  const bold = /\*\*(.+?)\*\*/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(bold)) {
    const start = m.index ?? 0;
    if (start > last) {
      nodes.push(text.slice(last, start));
    }
    nodes.push(
      <strong key={key++} className="font-semibold text-gray-800">
        {m[1]}
      </strong>,
    );
    last = start + m[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return nodes.length ? nodes : text;
}
