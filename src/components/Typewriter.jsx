import React, { useState, useEffect } from 'react'

export function Typewriter({ words, speed = 100, deleteSpeed = 50, delay = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout

    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          if (isDeleting) {
            setCurrentText((prev) => prev.slice(0, -1))
          } else {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          }
        },
        isDeleting ? deleteSpeed : speed
      )
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delay])

  return (
    <span>
      {currentText}
      <span className="cursor">|</span>
    </span>
  )
}

