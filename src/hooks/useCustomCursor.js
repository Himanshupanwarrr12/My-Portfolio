import { useEffect, useRef, useCallback } from 'react'

/**
 * useCustomCursor — Cartoon-themed custom cursor with:
 * 1. Small dot cursor with thick border
 * 2. Trailing comet tail of colored dots that follow with physics
 * 3. Sparkle burst on click
 * NO ring — replaced with trailing dots for a more playful feel.
 */
export function useCustomCursor() {
  const dotRef = useRef(null)
  const sparkleContainerRef = useRef(null)
  const trailDotsRef = useRef([])
  const mousePos = useRef({ x: -100, y: -100 })
  const trailPositions = useRef([])
  const isHovering = useRef(false)
  const rafId = useRef(null)

  const SPARKLE_COLORS = ['#E63946', '#FFD166', '#2EC4B6', '#FF6B8A']
  const TRAIL_COUNT = 8
  const TRAIL_COLORS = ['#E63946', '#FFD166', '#2EC4B6', '#FF6B8A', '#E63946', '#FFD166', '#2EC4B6', '#FF6B8A']

  const createSparkle = useCallback((x, y) => {
    if (!sparkleContainerRef.current) return
    const sparkle = document.createElement('div')
    const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)]
    const size = Math.random() * 8 + 4
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * 60 + 30
    const dx = Math.cos(angle) * distance
    const dy = Math.sin(angle) * distance
    const isCircle = Math.random() > 0.3

    Object.assign(sparkle.style, {
      position: 'fixed',
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: isCircle ? '50%' : '3px',
      background: color,
      border: '1.5px solid #1D1D1D',
      pointerEvents: 'none',
      zIndex: '99998',
      transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
      transition: 'none',
    })

    sparkleContainerRef.current.appendChild(sparkle)

    requestAnimationFrame(() => {
      Object.assign(sparkle.style, {
        transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${Math.random() * 720}deg) scale(0)`,
        opacity: '0',
      })
    })

    setTimeout(() => sparkle.remove(), 800)
  }, [])

  useEffect(() => {
    // Create cursor dot
    const dot = document.createElement('div')
    Object.assign(dot.style, {
      position: 'fixed',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: '#E63946',
      border: '2px solid #1D1D1D',
      pointerEvents: 'none',
      zIndex: '99999',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.25s, height 0.25s, background 0.25s, box-shadow 0.25s',
      left: '-100px',
      top: '-100px',
      boxShadow: '0 0 0 rgba(0,0,0,0)',
    })

    // Create trailing dots
    const trailDots = []
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const trail = document.createElement('div')
      const size = Math.max(10 - i * 1, 3)
      Object.assign(trail.style, {
        position: 'fixed',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: TRAIL_COLORS[i],
        border: `${Math.max(1.5 - i * 0.1, 0.5)}px solid #1D1D1D`,
        pointerEvents: 'none',
        zIndex: `${99998 - i}`,
        transform: 'translate(-50%, -50%)',
        left: '-100px',
        top: '-100px',
        opacity: `${1 - i * 0.1}`,
        transition: 'opacity 0.2s',
      })
      trailDots.push(trail)
      document.body.appendChild(trail)
    }

    // Sparkle container
    const sparkleContainer = document.createElement('div')
    Object.assign(sparkleContainer.style, {
      position: 'fixed',
      inset: '0',
      pointerEvents: 'none',
      zIndex: '99997',
      overflow: 'hidden',
    })

    document.body.appendChild(dot)
    document.body.appendChild(sparkleContainer)
    dotRef.current = dot
    sparkleContainerRef.current = sparkleContainer
    trailDotsRef.current = trailDots

    // Init trail positions
    for (let i = 0; i < TRAIL_COUNT; i++) {
      trailPositions.current.push({ x: -100, y: -100 })
    }

    // Hide default cursor
    const style = document.createElement('style')
    style.textContent = `*, *::before, *::after { cursor: none !important; }`
    document.head.appendChild(style)

    let sparkleCounter = 0
    let lastSparkleX = 0
    let lastSparkleY = 0

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`

      // Sparkle every N pixels of movement
      const dx = e.clientX - lastSparkleX
      const dy = e.clientY - lastSparkleY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist > 40) {
        sparkleCounter++
        if (sparkleCounter % 3 === 0) {
          createSparkle(e.clientX, e.clientY)
        }
        lastSparkleX = e.clientX
        lastSparkleY = e.clientY
      }
    }

    // Smooth trail follow with cascading delay
    const animateTrail = () => {
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const target = i === 0 ? mousePos.current : trailPositions.current[i - 1]
        const speed = 0.25 - (i * 0.015) // Each dot follows slightly slower
        trailPositions.current[i].x += (target.x - trailPositions.current[i].x) * speed
        trailPositions.current[i].y += (target.y - trailPositions.current[i].y) * speed
        trailDots[i].style.left = `${trailPositions.current[i].x}px`
        trailDots[i].style.top = `${trailPositions.current[i].y}px`
      }
      rafId.current = requestAnimationFrame(animateTrail)
    }

    // Hover detection
    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .global-card')
      if (target) {
        isHovering.current = true
        dot.style.width = '18px'
        dot.style.height = '18px'
        dot.style.background = '#FFD166'
        dot.style.boxShadow = '0 0 12px rgba(255, 209, 102, 0.4)'
        // Make trail dots glow
        trailDots.forEach(t => { t.style.opacity = '1' })
      }
    }

    const onMouseOut = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .global-card')
      if (target) {
        isHovering.current = false
        dot.style.width = '12px'
        dot.style.height = '12px'
        dot.style.background = '#E63946'
        dot.style.boxShadow = '0 0 0 rgba(0,0,0,0)'
        // Reset trail opacity
        trailDots.forEach((t, i) => { t.style.opacity = `${1 - i * 0.1}` })
      }
    }

    // Click burst
    const onClick = (e) => {
      for (let i = 0; i < 10; i++) {
        createSparkle(e.clientX, e.clientY)
      }
      // Pop the dot
      dot.style.width = '20px'
      dot.style.height = '20px'
      setTimeout(() => {
        dot.style.width = isHovering.current ? '18px' : '12px'
        dot.style.height = isHovering.current ? '18px' : '12px'
      }, 150)
    }

    // Hide on leave
    const onMouseLeave = () => {
      dot.style.left = '-100px'
      dot.style.top = '-100px'
      trailDots.forEach(t => {
        t.style.left = '-100px'
        t.style.top = '-100px'
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    window.addEventListener('mouseout', onMouseOut, { passive: true })
    window.addEventListener('click', onClick)
    document.addEventListener('mouseleave', onMouseLeave)

    rafId.current = requestAnimationFrame(animateTrail)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('click', onClick)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId.current)
      dot.remove()
      trailDots.forEach(t => t.remove())
      sparkleContainer.remove()
      style.remove()
      document.body.style.cursor = ''
    }
  }, [createSparkle])
}
