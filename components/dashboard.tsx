'use client'

import { Sidebar } from '@/components/sidebar'
import { TopNav } from '@/components/top-nav'
import { PortfolioOverview } from '@/components/portfolio-overview'
import { AIChat } from '@/components/ai-chat'
import { TokensGrid } from '@/components/tokens-grid'
import { AgentsPanel } from '@/components/agents-panel'
import { TransactionsPanel } from '@/components/transactions-panel'

export function Dashboard() {
  return (
    <div className="relative z-10 flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-0 lg:ml-64">
        <TopNav />
        
        <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-6">
          {/* Portfolio Overview */}
          <PortfolioOverview />
          
          {/* Grid Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <TokensGrid />
              <TransactionsPanel />
            </div>
            
            <div className="space-y-6">
              <AIChat />
              <AgentsPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
