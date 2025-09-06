import { type NextRequest, NextResponse } from "next/server"
import { verifyToken, sendWelcomeEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 })
    }

    const tokenData = verifyToken(token)

    if (!tokenData) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 })
    }

    // Here you would typically save the verified email to your database
    // For now, we'll just send the welcome email

    const welcomeResult = await sendWelcomeEmail(tokenData.email, tokenData.type as "early-access" | "newsletter")

    if (!welcomeResult.success) {
      console.error("Failed to send welcome email:", welcomeResult.error)
      // Don't fail the verification if welcome email fails
    }

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
      type: tokenData.type,
    })
  } catch (error) {
    console.error("Error in verify-email API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
