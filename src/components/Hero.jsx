import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const pages = [
  {
    key: 'page1',
    title: 'Welcome to Page 1',
    description: 'Scroll or swipe to continue',
  },
  {
    key: 'page2',
    title: 'This is Page 2',
    description: 'Keep scrolling or swiping',
  },
  {
    key: 'page3',
    title: 'Finally Page 3',
    description: 'Scroll up to go back',
  },
]

export default function VirtualScrollPages() {
  const [progress, setProgress] = useState(0)
  const scrollRef = useRef(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const queuedDeltaRef = useRef(0)

  const totalPages = pages.length
  const maxProgress = totalPages

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setIsInitialized(true)

    let pauseTimeout = null
    const pauseDuration = 2500

    const shouldPause = (next, delta) => {
      const current = scrollRef.current
      const atIntegerBoundary = delta > 0 && next % 1 === 0 && next > current
      const atPrevIntegerBoundary = delta < 0 && next % 1 === 0 && next < current
      const currentPageIndex = Math.floor(current)
      const nextPageIndex = Math.floor(next)
      const currentPageProgress = Math.max(0, Math.min(current - currentPageIndex, 1))
      const extraDelay = delta > 0 && currentPageIndex === 1 && nextPageIndex === 2 && currentPageProgress >= 1
      return atIntegerBoundary || atPrevIntegerBoundary || extraDelay
    }

    const handleScroll = (delta) => {
      if (isPaused) {
        queuedDeltaRef.current = delta
        return
      }

      const next = clamp(scrollRef.current + delta, 0, maxProgress)

      if (shouldPause(next, delta) && next !== 0 && next !== maxProgress) {
        setIsPaused(true)
        pauseTimeout = setTimeout(() => {
          setIsPaused(false)
          scrollRef.current = next
          setProgress(next)
          if (queuedDeltaRef.current !== 0) {
            const queued = queuedDeltaRef.current
            queuedDeltaRef.current = 0
            handleScroll(queued)
          }
        }, pauseDuration)
        return
      }

      scrollRef.current = next
      setDirection(delta > 0 ? 1 : -1)
      setProgress(next)
    }

    const onWheel = (e) => {
      e.preventDefault()
      handleScroll(e.deltaY * 0.003)
    }

    let touchStartY = 0
    let isTouching = false

    const onTouchStart = (e) => {
      isTouching = true
      touchStartY = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      if (!isTouching) return
      e.preventDefault()
      const delta = (touchStartY - e.touches[0].clientY) * 0.006
      handleScroll(delta)
      touchStartY = e.touches[0].clientY
    }

    const onTouchEnd = () => {
      isTouching = false
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: false })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: false })

    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      if (pauseTimeout) clearTimeout(pauseTimeout)
    }
  }, [isPaused])

  const rawIndex = progress
  const pageIndex = Math.min(Math.floor(rawIndex), totalPages - 1)
  const pageProgress = Math.max(0, Math.min(rawIndex - pageIndex, 1))

  const typeText = (text, idx) => {
    if (idx === 0) return text
    const length = Math.ceil(text.length * pageProgress)
    return text.slice(0, length)
  }

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      position: 'absolute',
      width: '100%',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
      width: '100%',
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      position: 'absolute',
      width: '100%',
    }),
  }

  if (!isInitialized) {
    return <div style={loadingStyle}>Loading...</div>
  }

  return (
    <div style={containerStyle}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={pages[pageIndex].key}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          style={pageStyle}
        >
          <h1 style={{ fontSize: '5vw', margin: 0 }}>
            {typeText(pages[pageIndex].title, pageIndex)}
          </h1>
          <p style={{ fontSize: '3vw', marginTop: '1rem', fontWeight: 600 }}>
            {typeText(pages[pageIndex].description, pageIndex)}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const containerStyle = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#000',
  color: 'white',
  fontFamily: "'Space Grotesk', sans-serif",
  overflow: 'hidden',
  position: 'relative',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 2rem',
  textAlign: 'center',
}

const pageStyle = {
  maxWidth: 800,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}

const loadingStyle = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#000',
  color: 'white',
  fontFamily: "'Space Grotesk', sans-serif",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
