'use client'

import { Wallet, Home, Zap, Users, Settings, Target, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const navItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Wallet, label: 'Wallets', active: false },
  { icon: TrendingUp, label: 'Trading', active: false },
  { icon: Target, label: 'Strategies', active: false },
  { icon: Zap, label: 'AI Agents', active: false },
  { icon: Users, label: 'Social', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 glass-card rounded-xl"
      >
        <Wallet className="w-6 h-6 text-primary" />
      </button>
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 glass-card border-r border-border/50 p-6 transition-transform z-40",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center glow-red">
            <Wallet className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Nebula</h1>
            <p className="text-xs text-muted-foreground">Wallet</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                item.active
                  ? "bg-primary/10 text-primary border border-primary/20 glow-red"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        {/* Bottom Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="glass-card p-4 rounded-xl border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary">AI</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">AI Copilot</p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </aside>
      
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
