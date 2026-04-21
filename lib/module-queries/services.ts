import type { ServicesRow } from '@/lib/types/services';

// ---------------------------------------------------------------------------
// Resolved path types
// ---------------------------------------------------------------------------
export type ResolvedServicesPath =
  | { type: 'item'; item: ServicesRow }
  | { type: 'list'; items: ServicesRow[] }
  | { type: 'not_found' };

// ---------------------------------------------------------------------------
// fetchServicesList
// Returns all published services ordered by sort_order ASC.
// Real implementation injected by Scaffolder (Supabase / fetch / etc.).
// ---------------------------------------------------------------------------
export async function fetchServicesList(
  locale: string,
): Promise<ServicesRow[]> {
  // TODO: replace with real data-fetching implementation
  // Example Supabase:
  // const { data } = await supabase
  //   .from('module_services')
  //   .select('*')
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('sort_order', { ascending: true });
  // return data ?? [];
  void locale;
  return [];
}

// ---------------------------------------------------------------------------
// fetchFeaturedServices
// Returns is_featured=true services, limited to `count`.
// ---------------------------------------------------------------------------
export async function fetchFeaturedServices(
  locale: string,
  count = 3,
): Promise<ServicesRow[]> {
  // TODO: replace with real data-fetching implementation
  // Example Supabase:
  // const { data } = await supabase
  //   .from('module_services')
  //   .select('*')
  //   .eq('is_featured', true)
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('sort_order', { ascending: true })
  //   .limit(count);
  // return data ?? [];
  void locale;
  void count;
  return [];
}

// ---------------------------------------------------------------------------
// resolveServicesPath
// Categories disabled — slug is a single segment.
// slug[0] → match against item slug for locale.
// ---------------------------------------------------------------------------
export async function resolveServicesPath(
  locale: string,
  slug: string[],
): Promise<ResolvedServicesPath> {
  if (!slug || slug.length === 0) {
    const items = await fetchServicesList(locale);
    return { type: 'list', items };
  }

  // Single-segment slug → item lookup
  const itemSlug = slug[slug.length - 1];

  // TODO: replace with real data-fetching implementation
  // Example Supabase (JSONB slug field):
  // const { data } = await supabase
  //   .from('module_services')
  //   .select('*')
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .or(`slug->>${locale}.eq.${itemSlug},slug->>tr.eq.${itemSlug}`)
  //   .maybeSingle();
  // if (data) return { type: 'item', item: data };
  // return { type: 'not_found' };

  void itemSlug;
  return { type: 'not_found' };
}
