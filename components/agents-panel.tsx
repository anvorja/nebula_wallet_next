'use client'

import { Card } from '@/components/ui/card'
import { Shield, Target, Users, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const agents = [
  { icon: Shield, name: 'Risk Guardian', status: 'Active', color: 'text-primary' },
  { icon: Target, name: 'Portfolio Optimizer', status: 'Idle', color: 'text-muted-foreground' },
  { icon: Users, name: 'Social Trading Bot', status: 'Active', color: 'text-primary' },
]

export function AgentsPanel() {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-bold text-foreground mb-4">AI Agents</h3>
      
      <div className="space-y-3">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="glass-card p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <agent.icon className={`w-5 h-5 ${agent.color}`} />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{agent.name}</p>
                  <p className="text-xs text-muted-foreground">{agent.status}</p>
                </div>
              </div>
              {agent.status === 'Active' && (
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              )}
            </div>
            
            <Button
              size="sm"
              variant="outline"
              className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary"
            >
              <Play className="w-3 h-3 mr-2" />
              Configure
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
