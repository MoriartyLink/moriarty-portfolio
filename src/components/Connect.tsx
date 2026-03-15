'use client'

import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

interface Connection {
  platform: string
  handle: string
  url: string
}

const Connect = () => {
  const connections: Connection[] = [
    {
      platform: 'github.com',
      handle: '/MoriartyLink',
      url: 'https://github.com/MoriartyLink'
    },
    {
      platform: 'linkedin.com',
      handle: '/in/minthukhaing',
      url: 'https://www.linkedin.com/in/minthukhaing/'
    },
    {
      platform: 'telegram',
      handle: '@sudo_summon_moriarty',
      url: 'https://t.me/sudo_summon_moriarty'
    },
    {
      platform: 'email',
      handle: 'moriartylink@gmail.com',
      url: 'mailto:moriartylink@gmail.com'
    }
  ]

  return (
    <div className="space-y-4">
      <div className="text-white">
        <TypewriterText text="$ ./connect.sh" className="text-lg font-bold mb-4" />
      </div>

      <div className="space-y-3">
        {connections.map((connection, index) => (
          <motion.div
            key={connection.platform}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.15 }}
          >
            <motion.a
              href={connection.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-white/30 hover:border-white hover:bg-white/5 transition-all duration-300 glitch block"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <TypewriterText 
                    text={connection.platform}
                    className="text-white font-mono text-sm font-bold"
                    delay={600 + index * 150}
                  />
                </div>
                <TypewriterText 
                  text={connection.handle}
                  className="text-white/60 text-xs"
                  delay={800 + index * 150}
                />
              </div>
              <div className="text-white/40 text-xs font-mono group-hover:text-white transition-colors">
                <TypewriterText text="[LINK]" delay={1000 + index * 150} />
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/30">
        <div className="text-white text-xs space-y-1">
          <div><span className="text-white/60">$</span> ping mori.system</div>
          <div className="pl-4">
            <TypewriterText text="64 bytes from mori.system: time=0.001ms" delay={2000} />
          </div>
          <div className="pl-4 mt-1">
            <TypewriterText text="Connection established. Ready to collaborate." delay={2500} />
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <motion.button
          className="px-4 py-2 border border-white text-white font-mono text-sm glitch hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TypewriterText text="[INITIATE_COLLABORATION]" delay={3000} />
        </motion.button>
      </div>
    </div>
  )
}

export default Connect
