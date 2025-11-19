import { Dashboard } from '@/components/dashboard'
import { BackgroundParticles } from '@/components/background-particles'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundParticles />
      <Dashboard />
    </main>
  )
}

