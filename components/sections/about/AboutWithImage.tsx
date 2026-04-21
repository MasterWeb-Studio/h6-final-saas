import type { AboutContent } from './types';

// Sol metin + sağ görsel alanı. Editorial/premium. H6 media pipeline'ına kadar
// sağ blok gradient placeholder. Brief opsiyonel imageUrl/imageAlt şimdilik
// AboutSection şemasında yok — placeholder görseli kullanılır.
export function AboutWithImage({ content }: { content: AboutContent }) {
  return (
    <section
      className="relative"
      style={{
        paddingBlock: 'var(--section-gap-y, 5rem)',
        background: 'var(--color-bg, var(--color-background))',
        color: 'var(--color-text, var(--color-foreground))',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            {content.eyebrow ? (
              <p
                className="mb-4 text-sm font-medium uppercase tracking-widest"
                style={{ color: 'var(--color-accent)' }}
              >
                {content.eyebrow}
              </p>
            ) : null}
            <h2
              className="text-3xl tracking-tight md:text-4xl"
              style={{
                fontFamily: 'var(--font-display, var(--font-heading))',
                fontWeight: 'var(--font-weight-display, var(--font-heading-weight, 700))',
              }}
            >
              {content.headline}
            </h2>
            <div
              className="mt-6 space-y-5"
              style={{ color: 'var(--color-text-muted, var(--color-muted))' }}
            >
              {content.body.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div
              className="aspect-[4/5] w-full"
              style={{
                background:
                  'linear-gradient(160deg, var(--color-secondary) 0%, var(--color-primary) 55%, var(--color-accent) 100%)',
                borderRadius: 'var(--radius-card, var(--radius))',
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
