import { type NextRequest, NextResponse } from "next/server"
import { sendVerificationEmail, type EmailData } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, type, firstName, lastName } = body

    if (!email || !type) {
      return NextResponse.json({ error: "Email and type are required" }, { status: 400 })
    }

    if (!["early-access", "newsletter"].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "early-access" or "newsletter"' }, { status: 400 })
    }

    const emailData: EmailData = {
      email,
      type,
      firstName,
      lastName,
    }

    const result = await sendVerificationEmail(emailData)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Verification email sent successfully",
    })
  } catch (error) {
    console.error("Error in send-verification API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
