import { useEffect, useRef } from 'react'

// Düşen kiraz yaprakları. Hareket azaltma açıksa sabit durur.
export default function Petals({ palette }) {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const ctx = cv.getContext('2d')
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let W, H, raf
    // Renk ilk karede okunur; tema niteliği o ana kadar <html> üzerine yazılmış olur
    let color = null

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = cv.clientWidth; H = cv.clientHeight
      cv.width = W * dpr; cv.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const make = (y) => ({
      x: Math.random() * W, y: y ?? -20, s: 5 + Math.random() * 6,
      vy: 0.4 + Math.random() * 0.7, vx: -0.3 + Math.random() * 0.9,
      r: Math.random() * 6.28, vr: -0.02 + Math.random() * 0.04, ph: Math.random() * 6.28,
    })

    size()
    const petals = Array.from({ length: Math.round(Math.min(28, W / 45)) }, () => make(Math.random() * H))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      if (!color) color = getComputedStyle(document.documentElement).getPropertyValue('--petal').trim() || '#f6b8cb'
      ctx.fillStyle = color
      ctx.globalAlpha = 0.7
      for (const p of petals) {
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r)
        ctx.beginPath(); ctx.moveTo(0, -p.s)
        ctx.bezierCurveTo(p.s * 0.9, -p.s * 0.6, p.s * 0.7, p.s * 0.7, 0, p.s)
        ctx.bezierCurveTo(-p.s * 0.7, p.s * 0.7, -p.s * 0.9, -p.s * 0.6, 0, -p.s)
        ctx.fill(); ctx.restore()
      }
    }
    const step = () => {
      petals.forEach((p, i) => {
        p.ph += 0.02; p.y += p.vy; p.x += p.vx + Math.sin(p.ph) * 0.4; p.r += p.vr
        if (p.y > H + 20 || p.x > W + 20 || p.x < -20) petals[i] = make()
      })
      draw()
      raf = requestAnimationFrame(step)
    }

    window.addEventListener('resize', size)
    raf = requestAnimationFrame(reduce ? draw : step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
      ctx.clearRect(0, 0, W, H)
    }
  }, [palette])

  return <canvas id="petals" aria-hidden="true" ref={ref} />
}
