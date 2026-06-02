'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on pointer-fine devices (mouse/stylus) — skip on mobile touch
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -200, my = -200
    let rx = -200, ry = -200
    let rafId: number
    let shown = false

    const show = () => {
      if (shown) return
      shown = true
      dot.style.opacity  = '1'
      ring.style.opacity = '1'
    }

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; show() }
    const onLeave = () => { dot.style.opacity = '0'; ring.style.opacity = '0'; shown = false }
    const onEnter = () => { if (mx > -100) show() }

    const tick = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%)`
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseleave', onLeave, { passive: true })
    document.addEventListener('mouseenter', onEnter, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:'fixed', top:0, left:0, width:10, height:10, borderRadius:'50%',
          background:'linear-gradient(135deg,#FF3B3B,#7C3AED)',
          boxShadow:'0 0 14px 3px rgba(255,59,59,0.55)',
          pointerEvents:'none', zIndex:99999, opacity:0,
          willChange:'transform,opacity', transition:'opacity 0.15s',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:'fixed', top:0, left:0, width:34, height:34, borderRadius:'50%',
          border:'1.5px solid rgba(124,58,237,0.55)',
          pointerEvents:'none', zIndex:99998, opacity:0,
          willChange:'transform,opacity', transition:'opacity 0.15s',
        }}
      />
    </>
  )
}
