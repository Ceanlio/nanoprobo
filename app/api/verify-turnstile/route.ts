import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 })
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY
    if (!secretKey) {
      console.error("TURNSTILE_SECRET_KEY environment variable is not set")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Verify the token with Cloudflare Turnstile
    const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    })

    const verifyData = await verifyResponse.json()

    return NextResponse.json({
      success: verifyData.success,
      error: verifyData.success ? undefined : "Verification failed",
    })
  } catch (error) {
    console.error("Error verifying Turnstile token:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
