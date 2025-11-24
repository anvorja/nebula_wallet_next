// src/components/ai-chat.tsx
'use client'

import { Card } from '@/src/components/ui/card'
import { Send, Sparkles } from 'lucide-react'
import { useState } from 'react'

const messages = [
  { role: 'assistant', content: 'Hi! I\'m your AI copilot. How can I help you today?' },
  { role: 'user', content: 'Show me my portfolio performance' },
  { role: 'assistant', content: 'Your portfolio is up 12.5% this month with a total value of $45,287.50. Would you like a detailed breakdown?' },
]

export function AIChat() {
  const [input, setInput] = useState('')
  
  return (
    <Card className="glass-card p-6 border-primary/20">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center glow-red">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-foreground">AI Copilot</h3>
        <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
      </div>
      
      {/* Messages */}
      <div className="space-y-3 mb-4 max-h-[300px] overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl text-sm ${
              msg.role === 'user'
                ? 'bg-primary/10 border border-primary/20 ml-8'
                : 'bg-secondary/50 mr-8'
            }`}
          >
            <p className="text-foreground">{msg.content}</p>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full pl-4 pr-12 py-3 bg-secondary/50 border border-border/50 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary hover:bg-primary/90 rounded-lg glow-red transition-all">
          <Send className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </Card>
  )
}
