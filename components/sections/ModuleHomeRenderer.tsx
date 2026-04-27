// Sprint 23 G2 — H6 modül home variants entegrasyonu
//
// Async server component: ContentPlan'daki `type: 'module-home'` section'ı
// alır, modül adına göre DB'den (module_<id> tablosu) veri çeker, ilgili
// HomeSection bileşeni ile render eder.
//
// Mevcut HomeSection bileşenleri (9): team / gallery / services / news /
// certificates / career / counter / newsletter / projects.
// Henüz HomeSection bileşeni olmayan 5 modül (products / references /
// contact-cards / video / timeline) için null döner — Sprint 24+'da
// component eklenecek (h7-backlog'a maddelendi).
//
// Hata durumunda: sessiz null (DB hatası, modül henüz seed'lenmemiş, vb.).
// Module home asla deploy'u kıramaz; içerik yoksa section atlanır.

import type { ModuleHomeSection } from '../../lib/content-types';
import type { TeamHomeSectionProps } from './team/TeamHomeSection';

import { TeamHomeSection } from './team/TeamHomeSection';
import { GalleryGrid3Col, GalleryMasonry6 } from './gallery/GalleryHomeSection';
import { ServiceGrid3Col, ServiceFeatured } from './services/ServicesHomeSection';
import { NewsGrid3Col, NewsListSection, NewsFeaturedLarge } from './news/NewsHomeSection';
import { CertificateStrip, CertificateGrid4Col } from './certificates/CertificateHomeSection';
import { CareerListSection, CareerCardsSection } from './career/CareerHomeSection';
import { CounterHomeSection } from './counter/CounterHomeSection';
import { NewsletterHomeSection } from './newsletter/NewsletterHomeSection';
import { ProjectsGrid3Col, ProjectsMasonry, ProjectsFeaturedLarge } from './projects/ProjectsHomeSection';

import { fetchTeamList } from '../../lib/module-queries/team';
import { fetchGalleryList } from '../../lib/module-queries/gallery';
import { fetchServicesList } from '../../lib/module-queries/services';
import { fetchNewsList } from '../../lib/module-queries/news';
import { fetchCertificateList } from '../../lib/module-queries/certificates';
import { fetchCareerList } from '../../lib/module-queries/career';
import { fetchProjectsList } from '../../lib/module-queries/projects';

interface ModuleHomeRendererProps {
  section: ModuleHomeSection;
  locale: string;
}

function take<T>(items: T[], count?: number): T[] {
  if (!count || count <= 0) return items;
  return items.slice(0, count);
}

export async function ModuleHomeRenderer({ section, locale }: ModuleHomeRendererProps) {
  try {
    switch (section.module) {
      case 'team': {
        const items = take(await fetchTeamList(locale), section.count ?? 6);
        if (items.length === 0) return null;
        const variantId: TeamHomeSectionProps['variantId'] =
          section.variant === 'team-masonry' ? 'team-masonry' : 'team-grid-3col';
        return (
          <TeamHomeSection
            variantId={variantId}
            items={items}
            locale={locale}
            title={section.headline}
            subtitle={section.description}
          />
        );
      }
      case 'gallery': {
        const items = take(await fetchGalleryList(locale), section.count ?? 6);
        if (items.length === 0) return null;
        if (section.variant === 'gallery-grid-3col') {
          return <GalleryGrid3Col items={items} locale={locale} title={section.headline} />;
        }
        return <GalleryMasonry6 items={items} locale={locale} title={section.headline} />;
      }
      case 'services': {
        const items = take(await fetchServicesList(locale), section.count ?? 6);
        if (items.length === 0) return null;
        if (section.variant === 'service-featured') {
          return (
            <ServiceFeatured
              items={items}
              locale={locale}
              title={section.headline}
              subtitle={section.description}
            />
          );
        }
        return (
          <ServiceGrid3Col
            items={items}
            locale={locale}
            title={section.headline}
            subtitle={section.description}
          />
        );
      }
      case 'news': {
        const result = await fetchNewsList(locale, { pageSize: section.count ?? 3 });
        const items = take(result.data, section.count ?? 3);
        if (items.length === 0) return null;
        if (section.variant === 'news-list') {
          return <NewsListSection items={items} locale={locale} title={section.headline} />;
        }
        if (section.variant === 'news-featured-large') {
          const first = items[0];
          if (!first) return null;
          return <NewsFeaturedLarge item={first} locale={locale} />;
        }
        return <NewsGrid3Col items={items} locale={locale} title={section.headline} />;
      }
      case 'certificates': {
        const items = take(await fetchCertificateList(locale), section.count ?? 6);
        if (items.length === 0) return null;
        if (section.variant === 'certificate-grid-4col') {
          return <CertificateGrid4Col items={items} locale={locale} heading={section.headline} />;
        }
        return <CertificateStrip items={items} locale={locale} heading={section.headline} />;
      }
      case 'career': {
        const items = take(await fetchCareerList(locale), section.count ?? 5);
        if (items.length === 0) return null;
        if (section.variant === 'career-cards') {
          return <CareerCardsSection items={items} locale={locale} heading={section.headline} />;
        }
        return <CareerListSection items={items} locale={locale} heading={section.headline} />;
      }
      case 'counter': {
        // CounterHomeSection kendi data'sını çekiyor (variantId+limit ile).
        const variantId =
          section.variant === 'counter-inline' ? 'counter-inline' : 'counter-4col';
        return (
          <CounterHomeSection
            variantId={variantId}
            locale={locale}
            limit={section.count}
          />
        );
      }
      case 'newsletter': {
        // Newsletter content-only; data fetch gerekmiyor.
        const variant =
          section.variant === 'newsletter-card' || section.variant === 'newsletter-footer'
            ? section.variant
            : 'newsletter-inline';
        return (
          <NewsletterHomeSection
            variant={variant}
            locale={locale}
            title={section.headline}
            description={section.description}
          />
        );
      }
      case 'projects': {
        const items = take(await fetchProjectsList(locale), section.count ?? 6);
        if (items.length === 0) return null;
        if (section.variant === 'projects-masonry') {
          return <ProjectsMasonry items={items} locale={locale} title={section.headline} />;
        }
        if (section.variant === 'projects-featured-large') {
          const first = items[0];
          if (!first) return null;
          return <ProjectsFeaturedLarge item={first} locale={locale} />;
        }
        return <ProjectsGrid3Col items={items} locale={locale} title={section.headline} />;
      }
      // Sprint 24+ — HomeSection bileşeni eksik (h7-backlog)
      case 'products':
      case 'references':
      case 'contact-cards':
      case 'video':
      case 'timeline':
        return null;
    }
  } catch {
    // Sessiz fail — module-home deploy'u kıramaz
    return null;
  }
}
