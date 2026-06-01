import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

function buildComponents(inline: boolean): Components {
  return {
  p: ({ children }) =>
    inline ? (
      <span className="leading-relaxed">{children}</span>
    ) : (
      <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
    ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
  ul: ({ children }) => (
    <ul className="my-2 list-disc space-y-1 pl-5">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-2 list-decimal space-y-1 pl-5">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  };
}

type MarkdownContentProps = {
  content: string;
  className?: string;
  /** Use inside a sentence (renders paragraphs as spans). */
  inline?: boolean;
};

export function MarkdownContent({
  content,
  className = "",
  inline = false,
}: MarkdownContentProps) {
  const Wrapper = inline ? "span" : "div";
  return (
    <Wrapper className={`markdown-content text-inherit ${className}`.trim()}>
      <ReactMarkdown components={buildComponents(inline)}>{content}</ReactMarkdown>
    </Wrapper>
  );
}
