import type { TeamRow } from '@/lib/types/team';

// ─── Types ────────────────────────────────────────────────────────────────────

export type TeamResolvedItem = {
  type: 'item';
  item: TeamRow;
};

export type TeamResolvedNotFound = {
  type: 'not_found';
};

export type TeamResolved = TeamResolvedItem | TeamResolvedNotFound;

// ─── Helpers (placeholder — Scaffolder binds real implementation) ─────────────

/**
 * Fetch all published team members for a given locale, ordered by sort_order ASC.
 * Scaffolder replaces this with a real Supabase / fetch call.
 */
export async function fetchTeamList(
  locale: string, // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<TeamRow[]> {
  // TODO: implement — e.g.
  // const { data } = await supabase
  //   .from('module_team')
  //   .select('*')
  //   .eq('project_id', PROJECT_ID)
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('sort_order', { ascending: true });
  // return data ?? [];
  return [];
}

/**
 * Resolve a single team member by slug segment.
 * Slug is locale-aware: checks slug[locale] first, then slug.tr.
 */
export async function resolveTeamPath(
  locale: string, // eslint-disable-line @typescript-eslint/no-unused-vars
  slug: string,   // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<TeamResolved> {
  // TODO: implement — e.g.
  // const { data } = await supabase
  //   .from('module_team')
  //   .select('*')
  //   .eq('project_id', PROJECT_ID)
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .or(`slug->>${locale}.eq.${slug},slug->>tr.eq.${slug}`)
  //   .single();
  // if (!data) return { type: 'not_found' };
  // return { type: 'item', item: data };
  return { type: 'not_found' };
}

/**
 * Fetch a limited set of team members for home section variants.
 * `count` maps to spec.frontend.homeSections[*].defaultCount.
 */
export async function fetchTeamForHomeSection(
  locale: string, // eslint-disable-line @typescript-eslint/no-unused-vars
  count: number,  // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<TeamRow[]> {
  // TODO: implement — e.g.
  // const { data } = await supabase
  //   .from('module_team')
  //   .select('*')
  //   .eq('project_id', PROJECT_ID)
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('sort_order', { ascending: true })
  //   .limit(count);
  // return data ?? [];
  return [];
}
