'use client'

import { motion } from 'framer-motion'
import NeofetchCard from './NeofetchCard'

const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-transparent">
      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white/90"
        >
          MIN THU KHAING
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4"
        >
          System Architect & Community Builder
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 2.0 }}
          className="text-md md:text-lg lg:text-xl text-violet-400"
        >
          System Architecture & Community Building v1.0.0
        </motion.p>
      </motion.div>

      {/* Neofetch Card */}
      <NeofetchCard />
    </div>
  )
}

export default HeroSection
