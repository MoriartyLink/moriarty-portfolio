'use client'

import TypewriterText from './TypewriterText'

const WhoAmI = () => {
  return (
    <div className="space-y-4">
      <div className="text-white">
        <TypewriterText text="$ whoami" className="text-lg font-bold mb-4" />
      </div>

      <div className="space-y-4">
        <TypewriterText 
          text="Min Thu Khaing (Mori)"
          className="text-white font-mono text-lg font-bold"
          delay={600}
        />
        
        <TypewriterText 
          text="System Architect & Community Builder"
          className="text-white/80 text-sm mt-2 block"
          delay={1000}
        />
        
        <div className="mt-4 space-y-2">
          <TypewriterText 
            text="• Currently studying at MIIT"
            className="text-white/70 text-xs"
            delay={1500}
          />
          <TypewriterText 
            text="• Leading Pockraft and Talkware Community Program"
            className="text-white/70 text-xs"
            delay={2000}
          />
          <TypewriterText 
            text="• Software Engineering Intern at FTLP Company"
            className="text-white/70 text-xs"
            delay={2500}
          />
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/30">
          <TypewriterText 
            text="Philosophy: Continuous-development "
            className="text-white/60 text-xs italic"
            delay={3000}
          />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/30">
        <div className="text-white text-xs space-y-1">
          <div><span className="text-white/60">$</span> cat tech_stack.txt</div>
          <div className="pl-4">
            <TypewriterText text="Node.js, TypeScript, Python" delay={6500} />
            <TypewriterText text="PostgreSQL, AI & RAG Systems" delay={7500} />
            <TypewriterText text="Venture Studio Infrastructure" delay={8500} />
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/30">
        <div className="text-white text-xs space-y-1">
          <div><span className="text-white/60">$</span> cat philosophy.txt</div>
          <div className="pl-4 italic">
            <TypewriterText text='"Continuous-development"' delay={9500} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoAmI
