import type { Metadata } from 'next';
import { fetchReferencesList } from '@/lib/module-queries/references';
import { getBreadcrumbs } from '@/lib/breadcrumb';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ReferencesGrid } from '@/components/sections/references/ReferencesRenderer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === 'tr' ? 'Referanslar' : 'References';
  const description =
    locale === 'tr'
      ? 'Birlikte çalıştığımız markalar.'
      : 'Brands we have worked with.';
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/references`,
      languages: {
        tr: '/tr/references',
        en: '/en/references',
      },
    },
  };
}

export default async function ReferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const items = await fetchReferencesList(locale);
  const breadcrumbs = await getBreadcrumbs(`/${locale}/references`, locale);

  return (
    <main>
      <Breadcrumb items={breadcrumbs} locale={locale} />
      <section
        style={{
          background: 'var(--color-bg)',
          paddingBlock: 'var(--section-gap-y)',
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-3xl"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
            }}
          >
            {locale === 'tr' ? 'Referanslar' : 'References'}
          </h1>
          <ReferencesGrid items={items} locale={locale} />
        </div>
      </section>
    </main>
  );
}
