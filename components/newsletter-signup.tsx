"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { TurnstileWidget } from "./turnstile-widget"
import { CheckCircle, Loader2, Mail, Newspaper as Newsletter } from "lucide-react"

interface NewsletterFormData {
  firstName: string
  email: string
}

export function NewsletterSignup() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    firstName: "",
    email: "",
  })
  const [turnstileToken, setTurnstileToken] = useState<string>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string>()

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError(undefined)
  }

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token)
    setError(undefined)
  }

  const handleTurnstileError = () => {
    setTurnstileToken(undefined)
    setError("Verification failed. Please try again.")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!turnstileToken) {
      setError("Please complete the verification challenge")
      return
    }

    if (!formData.firstName || !formData.email) {
      setError("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    setError(undefined)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!siteKey) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">Newsletter signup is temporarily unavailable.</p>
        </CardContent>
      </Card>
    )
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <CardTitle>Almost There!</CardTitle>
          <CardDescription>
            We've sent a confirmation email to {formData.email}. Please check your inbox and click the verification link
            to complete your newsletter subscription.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder or try again in a few minutes.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <Newsletter className="w-8 h-8 text-secondary mx-auto mb-2" />
        <CardTitle>Stay Updated</CardTitle>
        <CardDescription>
          Subscribe to our newsletter and get the latest AI insights, product updates, and industry trends delivered to
          your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="newsletter-firstName">First Name *</Label>
            <Input
              id="newsletter-firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              placeholder="Enter your first name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newsletter-email">Email Address *</Label>
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-4">
            <TurnstileWidget
              siteKey={siteKey}
              onVerify={handleTurnstileVerify}
              onError={handleTurnstileError}
              theme="auto"
              size="compact"
            />

            {error && <p className="text-sm text-destructive text-center">{error}</p>}

            <Button type="submit" className="w-full" disabled={isSubmitting || !turnstileToken} variant="secondary">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe to Newsletter
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Unsubscribe at any time. We typically send 1-2 emails per month.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
