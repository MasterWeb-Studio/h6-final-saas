import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getContent } from '../../lib/content-loader';
import { SectionRenderer } from '../../components/SectionRenderer';
import { JsonLdScript } from '../../components/JsonLdScript';
import { buildWebsiteJsonLd, buildOrganizationJsonLd } from '../../lib/json-ld';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  const home = content.pages.find((p) => p.slug === 'home');
  return home ? { title: home.metaTitle, description: home.metaDescription } : {};
}

export default async function Home() {
  const content = await getContent();
  const home = content.pages.find((p) => p.slug === 'home');
  if (!home) notFound();

  // H7 Sprint 18 G3 — home JSON-LD (WebSite + Organization).
  const siteName = content.meta.companyName;
  const description = content.meta.description;
  const locale = content.meta.language ?? 'tr';
  const website = buildWebsiteJsonLd({ name: siteName, description, locale });
  const organization = buildOrganizationJsonLd({ name: siteName, description });

  return (
    <>
      <JsonLdScript data={website} />
      <JsonLdScript data={organization} />
      {home.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </>
  );
}
