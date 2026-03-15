'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScreenWrapper from '@/components/ScreenWrapper'
import CyberBackground from '@/components/CyberBackground'
import HeroSection from '@/components/HeroSection'
import BootSequence from '@/components/BootSequence'
import BentoWindow from '@/components/BentoWindow'
import WhoAmI from '@/components/WhoAmI'
import Projects from '@/components/Projects'
import Connect from '@/components/Connect'

type SystemState = 'LOCKED' | 'BOOTING' | 'ACTIVE'

export default function Home() {
  const [systemStatus, setSystemStatus] = useState<SystemState>('LOCKED')

  const bootMessages = [
    'Initializing kernel...',
    'Loading system drivers...',
    'Mounting file systems...',
    'Starting network services...',
    'Loading user interface...',
    'System ready.'
  ]

  useEffect(() => {
    if (systemStatus === 'LOCKED') {
      const timer = setTimeout(() => {
        setSystemStatus('BOOTING')
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [systemStatus])

  const handleBootComplete = () => {
    setSystemStatus('ACTIVE')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-deep-black text-violet-blue font-mono">
      <CyberBackground />
      <ScreenWrapper>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Main Home Section */}
        <div id="home-section" className="min-h-screen">
          <AnimatePresence mode="wait">
            {systemStatus === 'LOCKED' && (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black flex items-center justify-center z-50"
              >
                <div className="text-center">
                  <div className="text-white text-2xl font-bold mb-4 neon-text">SYSTEM LOCKED</div>
                  <div className="text-purple-400 text-sm">Initializing...</div>
                </div>
              </motion.div>
            )}

            {systemStatus === 'BOOTING' && (
              <BootSequence key="booting" onBootComplete={handleBootComplete} />
            )}

            {systemStatus === 'ACTIVE' && (
              <motion.div
                key="active"
                className="container mx-auto px-4 py-8 max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <header className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block"
                  >
                    <div className="text-white text-4xl font-bold mb-2 neon-text">
                      TERMINAL INTERFACE
                    </div>
                    <div className="text-white text-sm">
                      System Status: Online
                    </div>
                  </motion.div>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <motion.div variants={containerVariants}>
                    <BentoWindow 
                      title="whoami" 
                      delay={0.5}
                      className="h-full"
                    >
                      <WhoAmI />
                    </BentoWindow>
                  </motion.div>

                  <motion.div variants={containerVariants}>
                    <BentoWindow 
                      title="projects.exe" 
                      delay={0.7}
                      className="h-full"
                    >
                      <Projects />
                    </BentoWindow>
                  </motion.div>

                  <motion.div variants={containerVariants}>
                    <BentoWindow 
                      title="connect.sh" 
                      delay={0.9}
                      className="h-full"
                    >
                      <Connect />
                    </BentoWindow>
                  </motion.div>
                </main>

                <motion.footer 
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="text-white text-xs font-mono">
                    <div>$ system_status --all</div>
                    <div className="mt-1">All systems operational | User: moriarty | Session: Active</div>
                  </div>
                </motion.footer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScreenWrapper>
    </div>
  )
}
