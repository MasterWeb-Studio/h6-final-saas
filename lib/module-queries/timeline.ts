import type { TimelineRow } from '@/lib/types/timeline';

export type TimelineResolved =
  | { type: 'not_found' }
  | { type: 'item'; item: TimelineRow }
  | { type: 'list'; items: TimelineRow[] };

/**
 * Fetch all published timeline events ordered by year DESC, month DESC.
 * Real implementation injected by Scaffolder — this is a typed placeholder.
 */
export async function fetchTimelineList(
  locale: string,
  limit?: number,
): Promise<TimelineRow[]> {
  // TODO: replace with actual Supabase / API call
  // Example:
  // const { data } = await supabase
  //   .from('module_timeline')
  //   .select('*')
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('year', { ascending: false })
  //   .order('month', { ascending: false, nullsFirst: false })
  //   .order('sort_order', { ascending: true })
  //   .limit(limit ?? 50);
  // return data ?? [];
  void locale;
  void limit;
  return [];
}

/**
 * Fetch a limited set of timeline events for home section variants.
 */
export async function fetchTimelineForHome(
  locale: string,
  count: number,
): Promise<TimelineRow[]> {
  return fetchTimelineList(locale, count);
}
