import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook: observes an element's visibility using IntersectionObserver.
 * Returns [ref, isVisible] — attach `ref` to the target element.
 *
 * @param {object} options
 * @param {number} options.threshold – visibility ratio to trigger (0-1)
 * @param {boolean} options.once – if true, stops observing after first trigger
 */
export function useInView({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isVisible]
}
