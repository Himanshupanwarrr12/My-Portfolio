import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Custom hook: cycles through an array of strings with a typewriter effect.
 * Returns the current displayed text string.
 */
export function useTypewriter(phrases, {
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseAfterType = 2000,
  pauseAfterDelete = 400,
} = {}) {
  const [displayText, setDisplayText] = useState('')
  const phraseIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const timeoutRef = useRef(null)

  const tick = useCallback(() => {
    const current = phrases[phraseIndex.current]

    if (isDeleting.current) {
      charIndex.current--
      setDisplayText(current.substring(0, charIndex.current))
    } else {
      charIndex.current++
      setDisplayText(current.substring(0, charIndex.current))
    }

    let delay = isDeleting.current ? deletingSpeed : typingSpeed

    // Finished typing — pause, then start deleting
    if (!isDeleting.current && charIndex.current === current.length) {
      delay = pauseAfterType
      isDeleting.current = true
    }

    // Finished deleting — move to next phrase
    if (isDeleting.current && charIndex.current === 0) {
      isDeleting.current = false
      phraseIndex.current = (phraseIndex.current + 1) % phrases.length
      delay = pauseAfterDelete
    }

    timeoutRef.current = setTimeout(tick, delay)
  }, [phrases, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete])

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, typingSpeed)
    return () => clearTimeout(timeoutRef.current)
  }, [tick, typingSpeed])

  return displayText
}
