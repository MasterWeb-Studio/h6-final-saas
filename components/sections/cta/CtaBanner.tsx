import Link from 'next/link';
import type { CtaContent } from './types';

// Default — koyu geniş banner blok, merkezli başlık + CTA. Eski Cta.tsx'in
// preset-native hâli. Güçlü eylem çağrısı, varsayılan varyant.
export function CtaBanner({ content }: { content: CtaContent }) {
  return (
    <section
      className="relative"
      style={{
        paddingBlock: 'var(--section-gap-y, 5rem)',
        background: 'var(--color-bg, var(--color-background))',
      }}
    >
      <div className="container-custom">
        <div
          className="flex flex-col items-center gap-6 px-8 py-16 text-center md:px-16 md:py-20"
          style={{
            background: 'var(--color-text, var(--color-foreground))',
            color: 'var(--color-bg, var(--color-background))',
            borderRadius: 'var(--radius-card, var(--radius))',
          }}
        >
          <h2
            className="max-w-2xl text-3xl tracking-tight md:text-4xl"
            style={{
              fontFamily: 'var(--font-display, var(--font-heading))',
              fontWeight: 'var(--font-weight-display, var(--font-heading-weight, 700))',
            }}
          >
            {content.headline}
          </h2>
          {content.subheadline ? (
            <p
              className="max-w-xl text-base md:text-lg"
              style={{
                color: 'var(--color-bg, var(--color-background))',
                opacity: 0.7,
              }}
            >
              {content.subheadline}
            </p>
          ) : null}
          <Link
            href={content.primaryCta.href}
            className="mt-2 inline-flex items-center justify-center text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              background: 'var(--color-bg, var(--color-background))',
              color: 'var(--color-text, var(--color-foreground))',
              borderRadius: 'var(--radius-button, var(--radius))',
              padding:
                'var(--button-padding-y, 0.75rem) var(--button-padding-x, 1.5rem)',
            }}
          >
            {content.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
