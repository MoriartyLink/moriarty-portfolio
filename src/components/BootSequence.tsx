'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from '@/hooks/useTypewriter'
import { Terminal, Cpu, HardDrive } from 'lucide-react'

const BootSequence = ({ onBootComplete }: { onBootComplete: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const bootMessages = [
    { text: 'Initializing kernel...', icon: <Cpu className="w-4 h-4" /> },
    { text: 'Loading system drivers...', icon: <HardDrive className="w-4 h-4" /> },
    { text: 'Mounting file systems...', icon: <Terminal className="w-4 h-4" /> },
    { text: 'Starting network services...', icon: <Terminal className="w-4 h-4" /> },
    { text: 'Loading user interface...', icon: <Terminal className="w-4 h-4" /> },
    { text: 'System ready.', icon: <Cpu className="w-4 h-4" /> }
  ]

  const { displayText } = useTypewriter({
    text: bootMessages[currentStep]?.text || '',
    delay: 0,
    onComplete: () => {
      if (currentStep < bootMessages.length - 1) {
        setTimeout(() => setCurrentStep(prev => prev + 1), 500)
      }
    }
  })

  useEffect(() => {
    let currentProgress = 0

    const interval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5
      if (currentProgress > 100) currentProgress = 100
      
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          onBootComplete()
        }, 500)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [onBootComplete])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="terminal-window max-w-md w-full mx-4"
      >
        <div className="terminal-header">
          <span className="text-white text-sm font-mono">THE_MORI_FILES_BOOT</span>
        </div>
        <div className="terminal-content">
          <div className="space-y-4">
            <div className="text-white font-mono text-sm">
              <div className="mb-2">$ ./mori_system_init.sh</div>
              <div className="flex items-center gap-2">
                {bootMessages[currentStep]?.icon}
                <div className="typewriter">{displayText}</div>
              </div>
            </div>
            
            <div className="boot-progress">
              <motion.div
                className="boot-progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <div className="text-white font-mono text-xs text-right">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BootSequence
