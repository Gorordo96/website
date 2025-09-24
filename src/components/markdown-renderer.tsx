import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';

export function MarkdownRenderer({ content, className }: { content: string; className?: string }) {
  return (
    <ReactMarkdown
      className={cn("prose prose-sm sm:prose-base dark:prose-invert max-w-none", className)}
      remarkPlugins={[remarkGfm]}
      components={{
        ul: ({ node, ...props }) => <ul className="list-disc space-y-2 pl-5" {...props} />,
        p: ({ node, ...props }) => <p className="leading-relaxed" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
