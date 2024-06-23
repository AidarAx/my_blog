import { MutableRefObject, useEffect } from 'react'

interface useInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: useInfiniteScrollOptions) {
  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    let observer: IntersectionObserver | null
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
