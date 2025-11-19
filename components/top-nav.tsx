'use client'

import { Search, Bell, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 glass-card border-b border-border/50 backdrop-blur-xl">
      <div className="flex items-center justify-between p-4 md:p-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tokens, transactions..."
              className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:glow-red transition-all"
            />
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-3 ml-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red">
            <User className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">0x742d...5f3c</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
