'use client'

import { Card } from '@/components/ui/card'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const tokens = [
  { symbol: 'BTC', name: 'Bitcoin', amount: '0.5234', value: '$21,245', change: '+5.2%', positive: true, color: 'bg-orange-500' },
  { symbol: 'ETH', name: 'Ethereum', amount: '3.4521', value: '$12,890', change: '+3.1%', positive: true, color: 'bg-blue-500' },
  { symbol: 'SOL', name: 'Solana', amount: '45.234', value: '$7,432', change: '-1.5%', positive: false, color: 'bg-purple-500' },
  { symbol: 'USDT', name: 'Tether', amount: '3,720', value: '$3,720', change: '0.0%', positive: true, color: 'bg-green-500' },
]

export function TokensGrid() {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">Your Tokens</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tokens.map((token) => (
          <div
            key={token.symbol}
            className="glass-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${token.color} rounded-full flex items-center justify-center`}>
                  <span className="text-sm font-bold text-white">{token.symbol[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{token.symbol}</p>
                  <p className="text-xs text-muted-foreground">{token.name}</p>
                </div>
              </div>
              <div className={`flex items-center gap-1 ${token.positive ? 'text-primary' : 'text-red-400'}`}>
                {token.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span className="text-xs font-medium">{token.change}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-xl font-bold text-foreground">{token.value}</p>
              <p className="text-sm text-muted-foreground">{token.amount} {token.symbol}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
