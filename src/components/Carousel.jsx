import { useCallback, useEffect, useRef, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from './Icons'

/**
 * Horizontal scroll-snap rail with prev/next buttons  used by
 * "Keep the conversation going" and "Discover more M2M features".
 */
export default function Carousel({ children, ariaLabel = 'Carousel' }) {
  const rail = useRef(null)
  const [state, setState] = useState({ start: true, end: false })

  const sync = useCallback(() => {
    const el = rail.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 })
  }, [])

  useEffect(() => {
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [sync])

  const move = (dir) => {
    const el = rail.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="carousel">
      <div className="carousel__rail" ref={rail} onScroll={sync} aria-label={ariaLabel}>
        {children}
      </div>

      <div className="carousel__nav">
        <button onClick={() => move(-1)} disabled={state.start} aria-label="Previous">
          <IconChevronLeft width="18" height="18" />
        </button>
        <button onClick={() => move(1)} disabled={state.end} aria-label="Next">
          <IconChevronRight width="18" height="18" />
        </button>
      </div>
    </div>
  )
}
