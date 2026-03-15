'use client'

const CyberBackground = () => {
  return (
    <>
      {/* Clean Grid Pattern */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Subtle Vignette */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
    </>
  )
}

export default CyberBackground
