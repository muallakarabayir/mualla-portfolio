import { useEffect, useState } from 'react'

const PALETTES = ['sakura', 'pembe', 'siyah']

function readSaved() {
  try {
    const p = localStorage.getItem('palette')
    return PALETTES.includes(p) ? p : 'sakura'
  } catch {
    return 'sakura'
  }
}

export function usePalette() {
  const [palette, setPalette] = useState(readSaved)

  useEffect(() => {
    const root = document.documentElement
    if (palette === 'sakura') root.removeAttribute('data-palette')
    else root.setAttribute('data-palette', palette)
    try { localStorage.setItem('palette', palette) } catch {}
  }, [palette])

  return [palette, setPalette]
}
