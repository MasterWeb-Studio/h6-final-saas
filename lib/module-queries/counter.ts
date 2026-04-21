/**
 * module-queries/counter.ts
 *
 * Supabase / fetch helper'ları — Counter modülü.
 * Gerçek implementasyon Scaffolder tarafında bağlanır;
 * bu dosya tip-güvenli placeholder export sağlar.
 */

import type { CounterRow } from '@/lib/types/counter';

// ---------------------------------------------------------------------------
// fetchCounterList
// ---------------------------------------------------------------------------

/**
 * Yayınlanmış counter kayıtlarını sort_order ASC ile döner.
 * @param locale  Aktif locale (şu an kullanılmıyor — tüm locale verileri döner)
 * @param limit   Maksimum kayıt sayısı (opsiyonel)
 */
export async function fetchCounterList(
  _locale: string,
  limit?: number,
): Promise<CounterRow[]> {
  // TODO: Scaffolder bu fonksiyonu Supabase client ile replace eder.
  // Örnek implementasyon:
  //
  // const { data, error } = await supabase
  //   .from('module_counter')
  //   .select('*')
  //   .not('published_at', 'is', null)
  //   .lte('published_at', new Date().toISOString())
  //   .order('sort_order', { ascending: true })
  //   .limit(limit ?? 100);
  //
  // if (error) throw error;
  // return data ?? [];

  void limit;
  return [];
}
