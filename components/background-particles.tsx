'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  left: string
  top: string
  delay: string
  duration: string
}

export function BackgroundParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 4}s`,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Efecto de estrellas */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      
      {/* Gradiente de resplandor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
    </div>
  )
}
