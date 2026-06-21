// Mirrors the configurator's SKU table (BUILD-BRIEF.md §3).
//
// `id` matches the configurator's exact SKU id (src/config/skus.js there) so
// a card can deep-link into it with ?sku=<id> — see CONFIGURATOR_URL below
// and src/components/Lineup.jsx.
//
// `photo` is set ONLY for SKUs with a verified-accurate real "loaded" photo
// (checked tile-by-tile against the actual content, not the filename — see
// project memory sarisari-photo-library). The other 3 (Wide Shot, Eight
// Tiles, Darling Dozen) have no real photo shot in the orientation they
// actually ship in yet, so they stay icon-only rather than show something
// misleading — this is the same reasoning that killed the earlier full-bleed
// photo-card feature on the configurator, just applied per-SKU instead of
// all-or-nothing. Don't add a `photo` for those three until a real photo
// exists in the correct (wide) orientation.
export const SKUS = [
  { id: 'SOLO', name: 'Solo', slots: 1, grid: '1×1', price: 388, photo: '/images/sku-thumbs/solo.jpg' },
  { id: 'DOUBLE TAKE', name: 'Double Take', slots: 2, grid: '2×1', price: 588, photo: '/images/sku-thumbs/double-take.jpg' },
  { id: 'TRIPLE TREAT', name: 'Triple Treat', slots: 3, grid: '3×1', price: 788, photo: '/images/sku-thumbs/triple-treat.jpg' },
  { id: 'WIDE SHOT', name: 'Wide Shot', slots: 4, grid: '4×1', price: 988 },
  { id: 'CLASSIC', name: 'Classic', slots: 4, grid: '2×2', price: 888, popular: true, photo: '/images/sku-thumbs/classic.jpg' },
  { id: 'SIX PACK', name: 'Six Pack', slots: 6, grid: '3×2', price: 1288, photo: '/images/sku-thumbs/six-pack.jpg' },
  { id: 'EIGHT TILES', name: 'Eight Tiles', slots: 8, grid: '4×2', price: 1688 },
  { id: 'GRIDSTAGRAM', name: 'Gridstagram', slots: 9, grid: '3×3', price: 1788, photo: '/images/sku-thumbs/gridstagram.jpg' },
  { id: 'DARLING DOZEN', name: 'Darling Dozen', slots: 12, grid: '4×3', price: 2488 },
]

export const CONFIGURATOR_URL = 'https://sarisarisnaps.vercel.app'
