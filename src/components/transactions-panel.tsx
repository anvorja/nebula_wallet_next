// src/components/transactions-panel.tsx
'use client'

import { Card } from '@/src/components/ui/card'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

const transactions = [
  { type: 'buy', token: 'BTC', amount: '0.0234', value: '$945.50', time: '2 hours ago', icon: ArrowDownLeft },
  { type: 'sell', token: 'ETH', amount: '0.5421', value: '$1,234.80', time: '5 hours ago', icon: ArrowUpRight },
  { type: 'buy', token: 'SOL', amount: '12.45', value: '$432.10', time: '1 day ago', icon: ArrowDownLeft },
]

export function TransactionsPanel() {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">Recent Activity</h3>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((tx, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 glass-card rounded-xl border border-border/50 hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              tx.type === 'buy' ? 'bg-primary/10' : 'bg-secondary/50'
            }`}>
              <tx.icon className={`w-5 h-5 ${tx.type === 'buy' ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-medium text-foreground">
                  {tx.type === 'buy' ? 'Bought' : 'Sold'} {tx.token}
                </p>
                <p className="font-bold text-foreground">{tx.value}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{tx.amount} {tx.token}</p>
                <p className="text-xs text-muted-foreground">{tx.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
