"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"
import { TurnstileWidget } from "./turnstile-widget"
import { CheckCircle, Loader2, Mail, Building, Users, Zap } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  jobTitle?: string
  companySize?: string
  useCase?: string
  hearAboutUs?: string
  additionalInfo?: string
  agreeToTerms: boolean
  agreeToMarketing: boolean
}

export function EarlyAccessForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    companySize: "",
    useCase: "",
    hearAboutUs: "",
    additionalInfo: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  })
  const [turnstileToken, setTurnstileToken] = useState<string>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string>()

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
    setError(undefined)
  }

  const handleSelectChange = (name: string, value: string) => {
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

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill in all required fields")
      return
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy")
      return
    }

    setIsSubmitting(true)
    setError(undefined)

    try {
      const response = await fetch("/api/early-access", {
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
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">Early access form is temporarily unavailable.</p>
        </CardContent>
      </Card>
    )
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <CardTitle className="text-2xl">Welcome to Early Access!</CardTitle>
          <CardDescription className="text-base">
            Thank you for your interest in Nanoprobo! We've sent a verification email to{" "}
            <span className="font-semibold text-foreground">{formData.email}</span>. Please check your inbox and click
            the verification link to complete your early access request.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-800 mb-2">What happens next?</h3>
              <ul className="text-sm text-amber-700 space-y-1 text-left">
                <li>• Verify your email address</li>
                <li>• Our team will review your application</li>
                <li>• You'll receive access credentials within 2-3 business days</li>
                <li>• Get exclusive access to beta features and priority support</li>
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder or contact us at{" "}
              <a href="mailto:support@nanoprobo.com" className="text-primary hover:underline">
                support@nanoprobo.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </div>
        <CardTitle className="text-xl sm:text-2xl">Join Early Access Program</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Get exclusive access to Nanoprobo's cutting-edge AI technology before the public launch. Join industry leaders
          who are already transforming their businesses with our platform.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
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
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                placeholder="Enter your business email"
              />
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
              <Building className="w-4 h-4 sm:w-5 sm:h-5" />
              Company Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Enter your company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="e.g., CTO, Product Manager"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size</Label>
              <Select onValueChange={(value) => handleSelectChange("companySize", value)} disabled={isSubmitting}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-1000">201-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Use Case Information */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Tell Us About Your Needs</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="useCase">Primary Use Case</Label>
                <Select onValueChange={(value) => handleSelectChange("useCase", value)} disabled={isSubmitting}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary use case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer-support">Customer Support Automation</SelectItem>
                    <SelectItem value="content-generation">Content Generation</SelectItem>
                    <SelectItem value="data-analysis">Data Analysis & Insights</SelectItem>
                    <SelectItem value="code-review">Code Review & Analysis</SelectItem>
                    <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                <Select onValueChange={(value) => handleSelectChange("hearAboutUs", value)} disabled={isSubmitting}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="referral">Referral from colleague</SelectItem>
                    <SelectItem value="conference">Conference/Event</SelectItem>
                    <SelectItem value="blog">Blog/Article</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Tell us more about your specific needs or questions..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Agreements */}
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleSelectChange("agreeToTerms", checked.toString())}
                disabled={isSubmitting}
                required
              />
              <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                I agree to the{" "}
                <a href="/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{" "}
                *
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToMarketing"
                name="agreeToMarketing"
                checked={formData.agreeToMarketing}
                onCheckedChange={(checked) => handleSelectChange("agreeToMarketing", checked.toString())}
                disabled={isSubmitting}
              />
              <Label htmlFor="agreeToMarketing" className="text-sm leading-relaxed">
                I would like to receive product updates, AI insights, and marketing communications from Nanoprobo
              </Label>
            </div>
          </div>

          <div className="space-y-4">
            <TurnstileWidget
              siteKey={siteKey}
              onVerify={handleTurnstileVerify}
              onError={handleTurnstileError}
              theme="auto"
            />

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-700 text-center">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 text-base"
              disabled={isSubmitting || !turnstileToken}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing Application...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Submit Early Access Request
                </>
              )}
            </Button>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800 text-center">
              <strong>Early Access Benefits:</strong> Priority support, beta feature access, direct feedback channel
              with our team, and special pricing when we launch.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
