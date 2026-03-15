'use client'

import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

interface Project {
  name: string
  description: string
  tech: string[]
  status: 'ACTIVE' | 'COMPLETED' | 'RESEARCH'
  url: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      name: 'shop-finder-API.exe',
      description: 'Geolocation-based services backbone handling spatial queries and complex database interactions',
      tech: ['Node.js', 'PostgreSQL', 'Geospatial'],
      status: 'ACTIVE',
      url: 'https://github.com/MoriartyLink/shop-finder-API'
    },
    {
      name: 'Safe-Route-API.daemon',
      description: 'Security-first routing engine calculating paths based on safety metrics and environmental datasets',
      tech: ['Node.js', 'Python', 'Data Analysis'],
      status: 'ACTIVE',
      url: 'https://github.com/Jeff307-kib/Safe-Route-API'
    },
    {
      name: 'my_AIPlayground.sh',
      description: 'Vertex AI RAG Chat system with session memory and Streamlit interface',
      tech: ['Python', 'Vertex AI', 'Streamlit', 'RAG'],
      status: 'RESEARCH',
      url: 'https://github.com/MoriartyLink/my_AIPlayground'
    },
    {
      name: 'pockraft.system',
      description: 'Community-powered software studio infrastructure',
      tech: ['Node.js', 'TypeScript', 'Community'],
      status: 'ACTIVE',
      url: 'https://github.com/MoriartyLink'
    }
  ]

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'ACTIVE': return 'text-violet'
      case 'RESEARCH': return 'text-yellow-400'
      case 'COMPLETED': return 'text-blue-400'
      default: return 'text-violet'
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-white">
        <TypewriterText text="$ ls shipping_registry/" className="text-lg font-bold mb-4" />
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="border border-white/30 p-3 hover:border-white hover:bg-white/5 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
          >
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <TypewriterText 
                      text={project.name} 
                      className="text-white font-mono text-sm font-bold"
                      delay={600 + index * 200}
                    />
                    <span className={`text-xs font-mono ${getStatusColor(project.status)}`}>
                      [{project.status}]
                    </span>
                  </div>
                  
                  <TypewriterText 
                    text={project.description}
                    className="text-white/80 text-xs mb-2 block"
                    delay={800 + index * 200}
                  />
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="text-xs bg-white/10 text-white px-2 py-1 border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/30">
        <div className="text-white text-xs">
          <TypewriterText text="$ total --human-readable" delay={2000} />
          <div className="pl-4 mt-1">
            <TypewriterText text="4.2K shipping_registry/" delay={2200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
