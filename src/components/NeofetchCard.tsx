'use client'

import { motion } from 'framer-motion'

const NeofetchCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
      className="absolute right-4 md:right-8 lg:right-16 top-4/5 transform -translate-y-1/2 z-20"
    >
      <div className="terminal-window bg-black/95 border-violet-blue/50 backdrop-blur-sm p-3 min-w-[240px] max-w-[280px]">
        <div className="font-mono text-xs space-y-1">
          <div className="text-white/90">
            <span className="text-violet-blue">mori@manjaro</span>
            <span className="text-white/60">~</span>
          </div>
          
          <div>
            <span className="text-white/60">OS:</span>
            <span className="text-white/90 ml-1">Manjaro 23.1.0</span>
          </div>
          
          <div>
            <span className="text-white/60">Kernel:</span>
            <span className="text-white/90 ml-1">6.8.0-1</span>
          </div>
          
          <div>
            <span className="text-white/60">Shell:</span>
            <span className="text-white/90 ml-1">zsh 5.9</span>
          </div>
          
          <div>
            <span className="text-white/60">CPU:</span>
            <span className="text-white/90 ml-1">i9-13900K</span>
          </div>
          
          <div>
            <span className="text-white/60">Memory:</span>
            <span className="text-white/90 ml-1">16GiB / 64GiB</span>
          </div>
          
          <div className="pt-1 border-t border-violet-blue/30">
            <div className="flex items-center">
              <span className="text-white/60">Theme:</span>
              <div className="flex items-center ml-1">
                <div className="w-2 h-2 bg-violet-blue rounded-sm mr-1"></div>
                <span className="text-white/90">Mori-Dark</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NeofetchCard
