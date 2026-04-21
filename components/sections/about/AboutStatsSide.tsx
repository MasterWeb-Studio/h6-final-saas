import type { AboutContent } from './types';

// Sol metin + sağda yan yana istatistik bloğu (2x2 grid). about.stats yoksa
// agent'ın brief kuralı gereği stats-side variant seçilmemeli, ama güvenli
// fallback için stats yoksa 2 sütunda sadece metin alanı göstermek yerine
// stats-side davranışını TextOnly'ye yakın bırakıyoruz — stats bloğu yoksa
// sağ kolon nötr/boş; tasarım için agent seçimi kritik.
export function AboutStatsSide({ content }: { content: AboutContent }) {
  const stats = content.stats ?? [];

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-center"
                style={{
                  background:
                    'var(--color-surface, var(--color-bg, var(--color-background)))',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card, var(--radius))',
                  padding: 'var(--card-padding, 2rem)',
                }}
              >
                <dd
                  className="text-4xl tracking-tight md:text-5xl"
                  style={{
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-display, var(--font-heading))',
                    fontWeight: 'var(--font-weight-display, 700)',
                  }}
                >
                  {stat.value}
                </dd>
                <dt
                  className="mt-3 text-sm"
                  style={{ color: 'var(--color-text-muted, var(--color-muted))' }}
                >
                  {stat.label}
                </dt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
