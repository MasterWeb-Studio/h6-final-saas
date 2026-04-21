import type { ProductRow } from '@/lib/types/products';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProductListOptions {
  page?: number;
  pageSize?: number;
  sort?: 'newest' | 'price-asc' | 'price-desc' | 'bestseller' | string;
  categoryId?: string;
  stockStatus?: string;
  priceMin?: number;
  priceMax?: number;
}

export interface ProductListResult {
  items: ProductRow[];
  total: number;
}

export type ResolvedProductPath =
  | { type: 'item'; item: ProductRow }
  | { type: 'category'; category: { id: string; name: Record<string, string> } | null; items: ProductRow[] }
  | { type: 'not_found' };

// ─── fetchProductList ─────────────────────────────────────────────────────────
/**
 * Fetches a paginated, filtered, sorted list of published products.
 * Implementation is injected by the Scaffolder — this file is a typed placeholder.
 *
 * @param locale  Active locale (e.g. 'tr' | 'en')
 * @param options Pagination / filter / sort options
 */
export async function fetchProductList(
  locale: string,
  options: ProductListOptions = {},
): Promise<ProductListResult> {
  // Scaffolder replaces this body with a real Supabase / API call.
  // Returning empty result so the page renders without crashing during build.
  void locale;
  void options;
  return { items: [], total: 0 };
}

// ─── fetchProductBestsellers ──────────────────────────────────────────────────
/**
 * Fetches bestseller products for home section variants.
 *
 * @param locale Active locale
 * @param count  Max number of items to return (default 4)
 */
export async function fetchProductBestsellers(
  locale: string,
  count = 4,
): Promise<ProductRow[]> {
  void locale;
  void count;
  return [];
}

// ─── fetchProductLatest ───────────────────────────────────────────────────────
/**
 * Fetches the latest published products for home section variants.
 *
 * @param locale Active locale
 * @param count  Max number of items to return (default 6)
 */
export async function fetchProductLatest(
  locale: string,
  count = 6,
): Promise<ProductRow[]> {
  void locale;
  void count;
  return [];
}

// ─── resolveProductPath ───────────────────────────────────────────────────────
/**
 * Resolves a catch-all slug array to either:
 *   - a single product item  (last segment matches a product slug)
 *   - a category page        (all segments are category slugs)
 *   - not_found
 *
 * Slug resolution strategy (right-to-left):
 *   1. Try to match the full slug array as a product slug in the given locale.
 *   2. If no product found, try to match as a category path (hierarchical, maxDepth 4).
 *   3. If neither matches, return { type: 'not_found' }.
 *
 * @param locale Active locale
 * @param slug   Catch-all segments from [...slug]
 */
export async function resolveProductPath(
  locale: string,
  slug: string[],
): Promise<ResolvedProductPath> {
  void locale;
  void slug;
  // Scaffolder replaces this body.
  return { type: 'not_found' };
}
