import type { ContactCardRow } from '@/lib/types/contact-cards';

/**
 * Fetches all published contact cards for a given locale, ordered by sort_order.
 * Real implementation is injected by Scaffolder — this is a typed placeholder.
 */
export async function fetchContactCardsList(
  locale: string,
  projectId?: string,
): Promise<ContactCardRow[]> {
  // Scaffolder replaces this body with Supabase / API call.
  // Placeholder: return empty array so pages render without error.
  void locale;
  void projectId;
  return [];
}

/**
 * Fetches a limited set of contact cards for home section variants.
 * @param count  Maximum number of cards to return (defaultCount from spec).
 */
export async function fetchContactCardsForHome(
  locale: string,
  count: number,
  projectId?: string,
): Promise<ContactCardRow[]> {
  const all = await fetchContactCardsList(locale, projectId);
  return all.slice(0, count);
}
