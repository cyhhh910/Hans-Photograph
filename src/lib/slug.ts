/**
 * Normalize CMS slugs for static routes: trim and collapse whitespace to hyphens.
 * Avoids broken paths when editors paste titles into slug fields (spaces, trailing whitespace).
 * Case is preserved so existing single-token slugs (e.g. HKU, Central) keep the same URL.
 */
export function normalizeSlug(input: string | null | undefined): string {
  if (input == null) return '';
  return String(input)
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
