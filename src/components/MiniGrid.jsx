// Small abstract dot-grid icon representing a SKU's shape — same idea as the
// configurator's icon-only SKU cards (see project memory: real catalog photos
// on SKU cards were tried and fully rolled back due to filename/orientation
// mismatches). Parses "4×3" style grid strings.
export default function MiniGrid({ grid }) {
  const [cols, rows] = grid.split('×').map(Number)
  const cells = Array.from({ length: cols * rows })

  return (
    <div
      className="grid gap-1"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {cells.map((_, i) => (
        <span key={i} className="aspect-square rounded-[3px] bg-selected/80" />
      ))}
    </div>
  )
}
