"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const [type, setType] = useState<string>("")

  useEffect(() => {
    const token = searchParams.get("token")
    const emailType = searchParams.get("type")

    if (!token) {
      setStatus("error")
      setMessage("Invalid verification link")
      return
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch("/api/verify-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        })

        const data = await response.json()

        if (response.ok) {
          setStatus("success")
          setType(data.type)
          setMessage(
            data.type === "early-access"
              ? "Your early access request has been confirmed!"
              : "Your newsletter subscription has been confirmed!",
          )
        } else {
          setStatus("error")
          setMessage(data.error || "Verification failed")
        }
      } catch (error) {
        setStatus("error")
        setMessage("An error occurred during verification")
      }
    }

    verifyEmail()
  }, [searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            {status === "loading" && <Loader2 className="w-12 h-12 text-primary animate-spin" />}
            {status === "success" && <CheckCircle className="w-12 h-12 text-green-500" />}
            {status === "error" && <XCircle className="w-12 h-12 text-red-500" />}
          </div>
          <CardTitle>
            {status === "loading" && "Verifying Email..."}
            {status === "success" && "Email Verified!"}
            {status === "error" && "Verification Failed"}
          </CardTitle>
          <CardDescription>{message}</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {status === "success" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {type === "early-access"
                  ? "Welcome to Nanoprobo Early Access! We'll be in touch soon with your access credentials."
                  : "Thank you for subscribing to our newsletter. You'll receive our latest updates and insights."}
              </p>
              <Button asChild className="w-full">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          )}
          {status === "error" && (
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/">Return to Homepage</Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
