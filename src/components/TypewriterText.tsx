'use client'

import { useTypewriter } from '@/hooks/useTypewriter'

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  onComplete?: () => void
}

const TypewriterText = ({ text, className = '', delay = 0, onComplete }: TypewriterTextProps) => {
  const { displayText, isComplete } = useTypewriter({ text, delay, onComplete })

  return (
    <span className={`${className} font-mono`}>
      {displayText}
      {!isComplete && <span className="animate-pulse">_</span>}
    </span>
  )
}

export default TypewriterText
