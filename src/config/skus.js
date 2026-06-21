// Mirrors the configurator's SKU table (BUILD-BRIEF.md §3). Deliberately
// text/icon-only, no product photos — the catalog photo library has
// confirmed filename/orientation mismatches (e.g. "horizontal" shots that are
// actually vertical) that already caused real churn on the configurator's own
// SKU cards before they were rolled back to icon-only. Don't reintroduce that
// risk here; if real photos are ever wanted, they need a fresh, verified,
// single-batch shoot first.
export const SKUS = [
  { name: 'Solo', slots: 1, grid: '1×1', price: 388 },
  { name: 'Double Take', slots: 2, grid: '2×1', price: 588 },
  { name: 'Triple Treat', slots: 3, grid: '3×1', price: 788 },
  { name: 'Wide Shot', slots: 4, grid: '4×1', price: 988 },
  { name: 'Classic', slots: 4, grid: '2×2', price: 888, popular: true },
  { name: 'Six Pack', slots: 6, grid: '3×2', price: 1288 },
  { name: 'Eight Tiles', slots: 8, grid: '4×2', price: 1688 },
  { name: 'Gridstagram', slots: 9, grid: '3×3', price: 1788 },
  { name: 'Darling Dozen', slots: 12, grid: '4×3', price: 2488 },
]

export const CONFIGURATOR_URL = 'https://sarisarisnaps.vercel.app'
