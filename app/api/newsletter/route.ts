import { type NextRequest, NextResponse } from "next/server"
import { verifyTurnstileToken } from "@/lib/turnstile"
import { sendVerificationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, email, turnstileToken } = body

    // Validate required fields
    if (!firstName || !email || !turnstileToken) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Verify email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Verify Turnstile token
    const isValidToken = await verifyTurnstileToken(turnstileToken)
    if (!isValidToken) {
      return NextResponse.json({ error: "Invalid verification. Please try again." }, { status: 400 })
    }

    // Send verification email
    const emailResult = await sendVerificationEmail({
      email,
      type: "newsletter",
      firstName,
    })

    if (!emailResult.success) {
      return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 })
    }

    // Here you would typically save the newsletter subscription to your database
    // For now, we'll just return success

    return NextResponse.json({
      success: true,
      message: "Newsletter subscription submitted successfully",
    })
  } catch (error) {
    console.error("Error in newsletter API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
