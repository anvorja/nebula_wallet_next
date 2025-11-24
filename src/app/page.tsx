// src/app/page.tsx
import { Dashboard } from '@/src/components/dashboard'
import { BackgroundParticles } from '@/src/components/background-particles'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundParticles />
      <Dashboard />
    </main>
  )
}

