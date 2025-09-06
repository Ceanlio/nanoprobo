"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { X, Settings, Cookie } from "lucide-react"
import {
  getCookieConsent,
  setCookieConsent,
  getCookiePreferences,
  setCookiePreferences,
  defaultPreferences,
  type CookiePreferences,
} from "@/lib/cookie-consent"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    const hasConsent = getCookieConsent()
    setShowBanner(!hasConsent)
    setPreferences(getCookiePreferences())
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setCookiePreferences(allAccepted)
    setCookieConsent(true)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    setCookiePreferences(defaultPreferences)
    setCookieConsent(true)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    setCookiePreferences(preferences)
    setCookieConsent(true)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return // Cannot change necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: value }))
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <Card className="mx-auto max-w-4xl bg-card border shadow-lg">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">We value your privacy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our
                    traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleAcceptAll} className="flex-1 sm:flex-none">
                    Accept All
                  </Button>
                  <Button variant="outline" onClick={handleRejectAll} className="flex-1 sm:flex-none bg-transparent">
                    Reject All
                  </Button>
                  <Button variant="ghost" onClick={() => setShowPreferences(true)} className="flex-1 sm:flex-none">
                    <Settings className="w-4 h-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </div>

              <Button variant="ghost" size="sm" onClick={handleRejectAll} className="flex-shrink-0">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Choose which cookies you want to accept. You can change these settings at any time.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">Necessary Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">Analytics Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">Marketing Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver personalized advertisements and track campaign performance.
                  </p>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => handlePreferenceChange("marketing", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="font-medium">Functional Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable enhanced functionality and personalization features.
                  </p>
                </div>
                <Switch
                  checked={preferences.functional}
                  onCheckedChange={(checked) => handlePreferenceChange("functional", checked)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowPreferences(false)}>
                Cancel
              </Button>
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
