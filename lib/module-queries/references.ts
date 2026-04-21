import type { ReferencesRow } from '@/lib/types/references';

/**
 * Fetch published references ordered by sort_order ASC.
 * Real implementation injected by Scaffolder (Supabase / REST / etc.).
 */
export async function fetchReferencesList(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _locale: string
): Promise<ReferencesRow[]> {
  // TODO: replace with actual data-fetching logic
  // Example (Supabase):
  // const { data } = await supabase
  //   .from('module_references')
  //   .select('*')
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('sort_order', { ascending: true })
  //   .limit(100);
  // return data ?? [];
  return [];
}

/**
 * Fetch a limited set of references for home sections.
 * `selectionLogic: 'manual'` — returns top N by sort_order.
 */
export async function fetchReferencesForHome(
  locale: string,
  count: number = 6
): Promise<ReferencesRow[]> {
  const all = await fetchReferencesList(locale);
  return all.slice(0, count);
}
