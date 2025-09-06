import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProboscisMonkeyLogoProps {
  className?: string
  showText?: boolean
  variant?: "default" | "hero" | "footer"
}

export function ProboscisMonkeyLogo({ 
  className = "w-8 h-8", 
  showText = false,
  variant = "default"
}: ProboscisMonkeyLogoProps) {
  const getDimensions = () => {
    switch (variant) {
      case "hero":
        return { width: 96, height: 96 }
      case "footer":
        return { width: 24, height: 24 }
      default:
        return { width: 32, height: 32 }
    }
  }

  const { width, height } = getDimensions()

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="relative group">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100" />
        
        {/* Logo container with enhanced styling */}
        <div className="relative bg-gradient-to-br from-background to-muted/50 rounded-xl p-1.5 shadow-lg border border-border/50 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
          <Image
            src="/logo.png"
            alt="Nanoprobo Logo"
            width={width}
            height={height}
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            priority
          />
          
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg pointer-events-none" />
        </div>
        
        {/* Animated ring for hero variant */}
        {variant === "hero" && (
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
        )}
      </div>
      
      {/* Optional text with enhanced styling */}
      {showText && (
        <span className="font-bold text-lg bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Nanoprobo
        </span>
      )}
    </div>
  )
}
