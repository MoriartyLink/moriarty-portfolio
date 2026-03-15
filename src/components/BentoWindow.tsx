'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BentoWindowProps {
  title: string
  children: ReactNode
  delay?: number
  className?: string
}

const BentoWindow = ({ title, children, delay = 0, className = '' }: BentoWindowProps) => {
  const windowVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)'
    }
  }

  return (
    <motion.div
      className={`terminal-window ${className}`}
      variants={windowVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)"
      }}
    >
      <div className="terminal-header">
        <span className="text-white text-xs font-mono neon-text">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </motion.div>
  )
}

export default BentoWindow
