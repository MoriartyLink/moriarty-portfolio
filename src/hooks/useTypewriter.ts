'use client'

import { useState, useEffect } from 'react'

interface UseTypewriterOptions {
  text: string
  speed?: number
  delay?: number
  onComplete?: () => void
}

export const useTypewriter = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  onComplete 
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setIsComplete(true)
          onComplete?.()
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay, onComplete])

  return { displayText, isComplete }
}
