"use client"

export interface TurnstileResponse {
  success: boolean
  token?: string
  error?: string
}

export function loadTurnstileScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Turnstile can only be loaded in the browser"))
      return
    }

    // Check if script is already loaded
    if (window.turnstile) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
    script.async = true
    script.defer = true

    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load Turnstile script"))

    document.head.appendChild(script)
  })
}

export async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const response = await fetch("/api/verify-turnstile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error("Error verifying Turnstile token:", error)
    return false
  }
}

// Extend the Window interface to include turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: any) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}
