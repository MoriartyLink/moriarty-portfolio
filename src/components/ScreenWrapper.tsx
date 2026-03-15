'use client'

import { useEffect, useRef } from 'react'

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .screen-wrapper {
        position: relative;
        overflow: hidden;
      }
      
      .screen-wrapper::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(153, 69, 255, 0.03) 2px,
          rgba(153, 69, 255, 0.03) 4px
        );
        pointer-events: none;
        z-index: 1;
        animation: crt-flicker 0.15s infinite;
      }
      
      @keyframes crt-flicker {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.98; }
      }
      
      .screen-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
          ellipse at center,
          transparent 0%,
          rgba(0, 0, 0, 0.1) 100%
        );
        pointer-events: none;
        z-index: 0;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div ref={screenRef} className="screen-wrapper">
      {children}
    </div>
  )
}

export default ScreenWrapper
