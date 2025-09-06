"use client"

import { useEffect, useRef, useState } from "react"
import { loadTurnstileScript } from "@/lib/turnstile"

interface TurnstileWidgetProps {
  siteKey: string
  onVerify: (token: string) => void
  onError?: () => void
  onExpire?: () => void
  theme?: "light" | "dark" | "auto"
  size?: "normal" | "compact"
}

export function TurnstileWidget({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = "auto",
  size = "normal",
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string>()
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    let mounted = true

    const initTurnstile = async () => {
      try {
        await loadTurnstileScript()

        if (!mounted || !containerRef.current || !window.turnstile) {
          return
        }

        const widgetId = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerify,
          "error-callback": () => {
            setError("Verification failed. Please try again.")
            onError?.()
          },
          "expired-callback": () => {
            setError("Verification expired. Please try again.")
            onExpire?.()
          },
          theme,
          size,
        })

        widgetIdRef.current = widgetId
        setIsLoaded(true)
      } catch (err) {
        if (mounted) {
          setError("Failed to load verification widget")
          console.error("Turnstile initialization error:", err)
        }
      }
    }

    initTurnstile()

    return () => {
      mounted = false
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [siteKey, onVerify, onError, onExpire, theme, size])

  const resetWidget = () => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
      setError(undefined)
    }
  }

  if (error) {
    return (
      <div className="text-center space-y-2">
        <p className="text-sm text-destructive">{error}</p>
        <button type="button" onClick={resetWidget} className="text-sm text-primary hover:underline">
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <div ref={containerRef} />
      {!isLoaded && <div className="w-[300px] h-[65px] bg-muted animate-pulse rounded" />}
    </div>
  )
}
