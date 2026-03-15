'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
  delay?: number
}

const TerminalWindow = ({ title, children, className = '', delay = 0 }: TerminalWindowProps) => {
  return (
    <motion.div
      className={`terminal-window ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.3, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 30px rgba(153, 69, 255, 0.5)"
      }}
    >
      <div className="terminal-header">
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
        <span className="text-violet text-sm ml-4 font-mono">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </motion.div>
  )
}

export default TerminalWindow
