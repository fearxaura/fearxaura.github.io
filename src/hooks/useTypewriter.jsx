import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words = [], speed = 80, deleteSpeed = 50, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const pauseTimeoutRef = useRef(null)

  useEffect(() => {
    if (!words.length) return
    const currentWord = words[wordIndex % words.length]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1))
        if (text.length + 1 === currentWord.length) {
          pauseTimeoutRef.current = setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(currentWord.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((i) => i + 1)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => {
      clearTimeout(timeout)
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
    }
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause])

  return text
}
