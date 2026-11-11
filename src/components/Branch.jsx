const FLOWERS = [
  [128, 160, 0], [150, 150, 20], [172, 78, 0], [196, 72, -15], [282, 150, 0],
  [294, 122, 30], [140, 205, 0], [226, 112, 0], [330, 38, 10], [262, 80, 0],
]

export default function Branch() {
  return (
    <svg className="branch" viewBox="0 0 400 300" aria-hidden="true">
      <defs>
        <g id="fl">
          <g fill="var(--petal)">
            {[0, 72, 144, 216, 288].map((r) => (
              <ellipse key={r} cx="0" cy="-9" rx="6" ry="9" transform={`rotate(${r})`} />
            ))}
          </g>
          <circle r="3.2" fill="var(--accent)" />
        </g>
      </defs>
      <path
        d="M400 18 C330 30 290 60 250 98 C215 132 180 150 128 160 M290 60 C300 90 296 120 282 150 M250 98 C230 80 200 74 172 78 M200 140 C190 170 170 190 140 205"
        fill="none" stroke="var(--branch)" strokeWidth="5" strokeLinecap="round" opacity=".75"
      />
      {FLOWERS.map(([x, y, r], i) => (
        <use key={i} href="#fl" x={x} y={y} transform={r ? `rotate(${r} ${x} ${y})` : undefined} />
      ))}
      <circle cx="176" cy="196" r="4" fill="var(--petal)" />
      <circle cx="312" cy="70" r="4" fill="var(--petal)" />
    </svg>
  )
}
