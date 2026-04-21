import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getContent } from '../../lib/content-loader';
import { SectionRenderer } from '../../components/SectionRenderer';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  const home = content.pages.find((p) => p.slug === 'home');
  return home ? { title: home.metaTitle, description: home.metaDescription } : {};
}

export default async function Home() {
  const content = await getContent();
  const home = content.pages.find((p) => p.slug === 'home');
  if (!home) notFound();

  return (
    <>
      {home.sections.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </>
  );
}
