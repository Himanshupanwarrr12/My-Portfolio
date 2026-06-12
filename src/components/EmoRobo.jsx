import { useEffect, useRef, useState } from 'react'

/**
 * EmoRobo — Animated cartoon emo robot character for the hero section.
 * Features:
 * - Follows cursor with eyes
 * - Blinks periodically
 * - Has idle bounce animation
 * - Antenna glows and wobbles
 * - Shows speech bubble on hover
 * All built with pure CSS/JSX — no images needed.
 */

const SPEECH_BUBBLES = [
  "Hey there! 👋",
  "Welcome to my world! ✨",
  "Let's build cool stuff!",
  "Beep boop! 🤖",
  "Hire me maybe? 💼",
]

export default function EmoRobo() {
  const roboRef = useRef(null)
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
  const [isBlinking, setIsBlinking] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [bubbleText, setBubbleText] = useState(SPEECH_BUBBLES[0])
  const bubbleIdx = useRef(0)

  // Eye tracking — follow cursor
  useEffect(() => {
    const onMouseMove = (e) => {
      if (!roboRef.current) return
      const rect = roboRef.current.getBoundingClientRect()
      const roboCenterX = rect.left + rect.width / 2
      const roboCenterY = rect.top + rect.height / 2

      const dx = e.clientX - roboCenterX
      const dy = e.clientY - roboCenterY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxOffset = 5

      setEyeOffset({
        x: (dx / Math.max(dist, 1)) * Math.min(dist * 0.02, maxOffset),
        y: (dy / Math.max(dist, 1)) * Math.min(dist * 0.02, maxOffset),
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  // Blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 200)
    }, 3000 + Math.random() * 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  // Speech bubble rotation
  const handleHover = () => {
    bubbleIdx.current = (bubbleIdx.current + 1) % SPEECH_BUBBLES.length
    setBubbleText(SPEECH_BUBBLES[bubbleIdx.current])
    setShowBubble(true)
  }

  return (
    <div
      ref={roboRef}
      className="relative inline-block"
      onMouseEnter={handleHover}
      onMouseLeave={() => setShowBubble(false)}
      style={{ cursor: 'none' }}
    >
      {/* Speech bubble */}
      <div
        style={{
          position: 'absolute',
          top: '-52px',
          left: '50%',
          transform: `translateX(-50%) scale(${showBubble ? 1 : 0})`,
          background: '#fff',
          border: '2.5px solid #1D1D1D',
          borderRadius: '14px',
          padding: '8px 16px',
          fontFamily: '"Outfit", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: '0.8rem',
          color: '#1D1D1D',
          boxShadow: '3px 3px 0px #1D1D1D',
          whiteSpace: 'nowrap',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          zIndex: 20,
        }}
      >
        {bubbleText}
        {/* Bubble tail */}
        <div
          style={{
            position: 'absolute',
            bottom: '-9px',
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: '14px',
            height: '14px',
            background: '#fff',
            border: '2.5px solid #1D1D1D',
            borderTop: 'none',
            borderLeft: 'none',
            zIndex: -1,
          }}
        />
      </div>

      {/* Robot body container */}
      <div style={{ animation: 'robo-idle 3s ease-in-out infinite' }}>
        {/* Antenna */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '-2px' }}>
          <div style={{ position: 'relative' }}>
            {/* Antenna stick */}
            <div
              style={{
                width: '3px',
                height: '18px',
                background: '#1D1D1D',
                margin: '0 auto',
                animation: 'antenna-wobble 2s ease-in-out infinite',
                transformOrigin: 'bottom center',
              }}
            />
            {/* Antenna ball */}
            <div
              style={{
                position: 'absolute',
                top: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#E63946',
                border: '2px solid #1D1D1D',
                animation: 'antenna-glow 2s ease-in-out infinite',
                boxShadow: '0 0 8px rgba(230, 57, 70, 0.5)',
              }}
            />
          </div>
        </div>

        {/* Head */}
        <div
          style={{
            width: '90px',
            height: '75px',
            background: '#2EC4B6',
            border: '2.5px solid #1D1D1D',
            borderRadius: '20px 20px 16px 16px',
            boxShadow: '4px 4px 0px #1D1D1D',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Visor / face area */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '8px',
              right: '8px',
              bottom: '12px',
              background: '#1D1D1D',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
            }}
          >
            {/* Left eye */}
            <div
              style={{
                width: isBlinking ? '18px' : '18px',
                height: isBlinking ? '3px' : '18px',
                borderRadius: isBlinking ? '2px' : '4px',
                background: '#E63946',
                border: isBlinking ? 'none' : '2px solid #E63946',
                boxShadow: `0 0 10px rgba(230, 57, 70, 0.6), inset 0 0 4px rgba(255,255,255,0.3)`,
                transition: 'height 0.1s, border-radius 0.1s',
                transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                position: 'relative',
              }}
            >
              {/* Eye pupil/glint */}
              {!isBlinking && (
                <div
                  style={{
                    position: 'absolute',
                    top: '3px',
                    right: '3px',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.7)',
                  }}
                />
              )}
            </div>

            {/* Right eye */}
            <div
              style={{
                width: isBlinking ? '18px' : '18px',
                height: isBlinking ? '3px' : '18px',
                borderRadius: isBlinking ? '2px' : '4px',
                background: '#E63946',
                border: isBlinking ? 'none' : '2px solid #E63946',
                boxShadow: `0 0 10px rgba(230, 57, 70, 0.6), inset 0 0 4px rgba(255,255,255,0.3)`,
                transition: 'height 0.1s, border-radius 0.1s',
                transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                position: 'relative',
              }}
            >
              {!isBlinking && (
                <div
                  style={{
                    position: 'absolute',
                    top: '3px',
                    right: '3px',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.7)',
                  }}
                />
              )}
            </div>
          </div>

          {/* Mouth line — emo straight line */}
          <div
            style={{
              position: 'absolute',
              bottom: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '24px',
              height: '2.5px',
              background: '#1D1D1D',
              borderRadius: '2px',
            }}
          />

          {/* Cheek blush — left */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              width: '12px',
              height: '6px',
              borderRadius: '50%',
              background: 'rgba(255, 107, 138, 0.4)',
            }}
          />
          {/* Cheek blush — right */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '12px',
              height: '6px',
              borderRadius: '50%',
              background: 'rgba(255, 107, 138, 0.4)',
            }}
          />
        </div>

        {/* Neck */}
        <div
          style={{
            width: '20px',
            height: '8px',
            background: '#6B6B6B',
            border: '2px solid #1D1D1D',
            margin: '-2px auto 0',
            borderRadius: '0 0 4px 4px',
          }}
        />

        {/* Body */}
        <div
          style={{
            width: '70px',
            height: '50px',
            background: '#FFD166',
            border: '2.5px solid #1D1D1D',
            borderRadius: '10px 10px 14px 14px',
            boxShadow: '3px 3px 0px #1D1D1D',
            margin: '-2px auto 0',
            position: 'relative',
          }}
        >
          {/* Body panel */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '30px',
              height: '20px',
              border: '2px solid #1D1D1D',
              borderRadius: '6px',
              background: 'rgba(29,29,29,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
            }}
          >
            {/* Status lights */}
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946', animation: 'status-blink 1.5s ease infinite' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2EC4B6', animation: 'status-blink 1.5s ease infinite 0.5s' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFD166', border: '1px solid #1D1D1D' }} />
          </div>

          {/* Arms */}
          {/* Left arm */}
          <div
            style={{
              position: 'absolute',
              left: '-16px',
              top: '6px',
              width: '12px',
              height: '30px',
              background: '#2EC4B6',
              border: '2px solid #1D1D1D',
              borderRadius: '8px',
              boxShadow: '2px 2px 0px #1D1D1D',
              animation: 'arm-wave-left 4s ease-in-out infinite',
              transformOrigin: 'top center',
            }}
          />
          {/* Right arm */}
          <div
            style={{
              position: 'absolute',
              right: '-16px',
              top: '6px',
              width: '12px',
              height: '30px',
              background: '#2EC4B6',
              border: '2px solid #1D1D1D',
              borderRadius: '8px',
              boxShadow: '2px 2px 0px #1D1D1D',
              animation: 'arm-wave-right 4s ease-in-out infinite 0.3s',
              transformOrigin: 'top center',
            }}
          />
        </div>

        {/* Legs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '-2px' }}>
          <div
            style={{
              width: '18px',
              height: '16px',
              background: '#6B6B6B',
              border: '2px solid #1D1D1D',
              borderRadius: '0 0 8px 8px',
              boxShadow: '2px 2px 0px #1D1D1D',
            }}
          />
          <div
            style={{
              width: '18px',
              height: '16px',
              background: '#6B6B6B',
              border: '2px solid #1D1D1D',
              borderRadius: '0 0 8px 8px',
              boxShadow: '2px 2px 0px #1D1D1D',
            }}
          />
        </div>
      </div>
    </div>
  )
}
