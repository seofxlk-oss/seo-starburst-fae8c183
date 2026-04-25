import { Sparkles } from "lucide-react";

export interface AIAnswer {
  q: string;
  a: string;
}

interface AIAnswerBlockProps {
  title?: string;
  intro?: string;
  answers: AIAnswer[];
  /** When true, also emits FAQPage JSON-LD (skip if parent already emits one). */
  emitSchema?: boolean;
}

/**
 * Concise, AI-friendly Q&A block designed to be cited verbatim by
 * ChatGPT, Perplexity, Google AI Overviews, Claude, etc.
 *
 * Uses semantic <dl><dt><dd> markup which LLM crawlers parse cleanly,
 * plus optional FAQPage schema for rich results.
 */
export const AIAnswerBlock = ({
  title = "Quick Answers",
  intro,
  answers,
  emitSchema = true,
}: AIAnswerBlockProps) => {
  const schema = emitSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: answers.map((a) => ({
          "@type": "Question",
          name: a.q,
          acceptedAnswer: { "@type": "Answer", text: a.a },
        })),
      }
    : null;

  return (
    <section
      aria-label={title}
      className="rounded-3xl border border-border bg-soft p-6 sm:p-10"
      data-ai-answer-block
    >
      <div className="flex items-center gap-2">
        <span className="badge-pill">
          <Sparkles className="size-3.5" /> AI-friendly answers
        </span>
      </div>
      <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 max-w-3xl text-muted-foreground">{intro}</p>
      )}

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        {answers.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <dt className="font-display text-base font-bold">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </section>
  );
};
