'use client'

import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function PortfolioOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Balance */}
      <Card className="glass-card p-6 border-primary/20 glow-red col-span-1 md:col-span-2">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
            <h2 className="text-4xl font-bold text-foreground">$45,287.50</h2>
          </div>
          <div className="glass-card p-3 rounded-xl border border-primary/30">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-primary">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-sm font-medium">+12.5%</span>
          </div>
          <span className="text-sm text-muted-foreground">vs last month</span>
        </div>
      </Card>
      
      {/* 24h Change */}
      <Card className="glass-card p-6">
        <p className="text-sm text-muted-foreground mb-2">24h Change</p>
        <h3 className="text-2xl font-bold text-primary mb-1">+$1,245.80</h3>
        <div className="flex items-center gap-1 text-primary">
          <ArrowUpRight className="w-3 h-3" />
          <span className="text-xs">+2.8%</span>
        </div>
      </Card>
      
      {/* Total Profit */}
      <Card className="glass-card p-6">
        <p className="text-sm text-muted-foreground mb-2">Total Profit</p>
        <h3 className="text-2xl font-bold text-foreground mb-1">$8,432.10</h3>
        <div className="flex items-center gap-1 text-primary">
          <ArrowUpRight className="w-3 h-3" />
          <span className="text-xs">+18.9%</span>
        </div>
      </Card>
    </div>
  )
}
