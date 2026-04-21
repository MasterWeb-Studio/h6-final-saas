import type { NewsRow } from '@/lib/types/news';

export interface NewsListOptions {
  categorySlug?: string | null;
  tag?: string | null;
  page?: number;
  pageSize?: number;
}

export interface NewsListResult {
  data: NewsRow[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface NewsCategory {
  id: string;
  slug: Record<string, string>;
  name: Record<string, string>;
  parent_id: string | null;
}

export type ResolvedNewsPath =
  | { type: 'not_found' }
  | { type: 'item'; item: NewsRow; related?: NewsRow[] }
  | { type: 'category'; category: NewsCategory | null; items: NewsRow[] };

export async function fetchNewsList(
  locale: string,
  options: NewsListOptions = {},
): Promise<NewsListResult> {
  void locale;
  void options;
  // TODO: implement with Supabase
  // const { categorySlug, tag, page = 1, pageSize = 12 } = options;
  // const supabase = createServerClient();
  // let query = supabase
  //   .from('module_news')
  //   .select('*', { count: 'exact' })
  //   .eq('project_id', PROJECT_ID)
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('published_at', { ascending: false })
  //   .range((page - 1) * pageSize, page * pageSize - 1);
  // if (categorySlug) { ... }
  // if (tag) { ... }
  // const { data, count, error } = await query;
  // if (error) throw error;
  // const total = count ?? 0;
  // return { data: data ?? [], total, page, pageSize, totalPages: Math.ceil(total / pageSize) };
  return { data: [], total: 0, page: 1, pageSize: 12, totalPages: 0 };
}

export async function fetchNewsCategories(locale: string): Promise<NewsCategory[]> {
  void locale;
  // TODO: implement with Supabase
  // const supabase = createServerClient();
  // const { data, error } = await supabase
  //   .from('module_news_categories')
  //   .select('*')
  //   .eq('project_id', PROJECT_ID)
  //   .order('sort_order', { ascending: true });
  // if (error) throw error;
  // return data ?? [];
  return [];
}

export async function fetchNewsCategoryBySlug(
  locale: string,
  slug: string,
): Promise<NewsCategory | null> {
  void locale;
  void slug;
  // TODO: implement with Supabase
  // const supabase = createServerClient();
  // const { data, error } = await supabase
  //   .from('module_news_categories')
  //   .select('*')
  //   .eq('project_id', PROJECT_ID)
  //   .eq(`slug->>${locale}`, slug)
  //   .maybeSingle();
  // if (error) throw error;
  // return data;
  return null;
}

export async function fetchNewsItemBySlug(
  locale: string,
  slug: string,
): Promise<NewsRow | null> {
  void locale;
  void slug;
  // TODO: implement with Supabase
  // const supabase = createServerClient();
  // const { data, error } = await supabase
  //   .from('module_news')
  //   .select('*')
  //   .eq('project_id', PROJECT_ID)
  //   .eq(`slug->>${locale}`, slug)
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .maybeSingle();
  // if (error) throw error;
  // return data;
  return null;
}

export async function fetchRelatedNews(
  locale: string,
  item: NewsRow,
  count = 3,
): Promise<NewsRow[]> {
  void locale;
  void item;
  void count;
  // TODO: implement with Supabase
  // const supabase = createServerClient();
  // let query = supabase
  //   .from('module_news')
  //   .select('*')
  //   .eq('project_id', PROJECT_ID)
  //   .neq('id', item.id)
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('published_at', { ascending: false })
  //   .limit(count);
  // if (item.category_id) { query = query.eq('category_id', item.category_id); }
  // const { data, error } = await query;
  // if (error) throw error;
  // return data ?? [];
  return [];
}

export async function resolveNewsPath(
  locale: string,
  slug: string[],
): Promise<ResolvedNewsPath> {
  if (slug.length === 0) {
    return { type: 'not_found' };
  }

  if (slug.length === 1) {
    const segment = slug[0];
    const item = await fetchNewsItemBySlug(locale, segment);
    if (item) {
      const related = await fetchRelatedNews(locale, item, 3);
      return { type: 'item', item, related };
    }
    const category = await fetchNewsCategoryBySlug(locale, segment);
    if (category) {
      const result = await fetchNewsList(locale, { categorySlug: segment, pageSize: 100 });
      return { type: 'category', category, items: result.data };
    }
    return { type: 'not_found' };
  }

  const lastSegment = slug[slug.length - 1];
  const item = await fetchNewsItemBySlug(locale, lastSegment);
  if (item) {
    const related = await fetchRelatedNews(locale, item, 3);
    return { type: 'item', item, related };
  }
  const categorySegment = slug[slug.length - 1];
  const category = await fetchNewsCategoryBySlug(locale, categorySegment);
  if (category) {
    const result = await fetchNewsList(locale, { categorySlug: categorySegment, pageSize: 100 });
    return { type: 'category', category, items: result.data };
  }

  return { type: 'not_found' };
}
