const LINKS = [
  ['#projeler', 'Projeler'],
  ['#deneyim', 'Deneyim'],
  ['#yetenekler', 'Yetenekler'],
  ['#egitim', 'Eğitim'],
  ['#iletisim', 'İletişim'],
]

const PALETTES = [
  { id: 'sakura', label: 'Sakura' },
  { id: 'pembe', label: 'Beyaz Pembe' },
  { id: 'siyah', label: 'Siyah Pembe' },
]

export default function Nav({ palette, onPaletteChange }) {
  return (
    <nav>
      <div className="brand"><b>Mualla</b></div>
      <ul>
        {LINKS.map(([href, label]) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
      <div className="palette" role="group" aria-label="Tema seç">
        {PALETTES.map((p) => (
          <button
            key={p.id}
            type="button"
            aria-pressed={palette === p.id}
            onClick={() => onPaletteChange(p.id)}
          >
            <span className={`sw ${p.id}`} />
            {p.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
