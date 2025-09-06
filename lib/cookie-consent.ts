"use client"

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
}

export const COOKIE_CONSENT_KEY = "nanoprobo-cookie-consent"
export const COOKIE_PREFERENCES_KEY = "nanoprobo-cookie-preferences"

export function getCookieConsent(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "true"
}

export function setCookieConsent(consent: boolean): void {
  if (typeof window === "undefined") return
  localStorage.setItem(COOKIE_CONSENT_KEY, consent.toString())
}

export function getCookiePreferences(): CookiePreferences {
  if (typeof window === "undefined") return defaultPreferences

  const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY)
  if (!stored) return defaultPreferences

  try {
    const parsed = JSON.parse(stored)
    return { ...defaultPreferences, ...parsed, necessary: true }
  } catch {
    return defaultPreferences
  }
}

export function setCookiePreferences(preferences: CookiePreferences): void {
  if (typeof window === "undefined") return

  const finalPreferences = { ...preferences, necessary: true }
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(finalPreferences))
}
