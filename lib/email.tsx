import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export interface EmailData {
  email: string
  type: "early-access" | "newsletter"
  firstName?: string
  lastName?: string
}

export async function sendVerificationEmail(data: EmailData) {
  if (!resend) {
    return { success: false, error: "Email service not configured" }
  }

  const verificationToken = generateVerificationToken(data.email, data.type)
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/verify-email?token=${verificationToken}&type=${data.type}`

  const subject =
    data.type === "early-access"
      ? "Confirm your Early Access Request - Nanoprobo"
      : "Confirm your Newsletter Subscription - Nanoprobo"

  const emailContent =
    data.type === "early-access"
      ? getEarlyAccessEmailTemplate(data.firstName || "there", verificationUrl)
      : getNewsletterEmailTemplate(data.firstName || "there", verificationUrl)

  try {
    const result = await resend.emails.send({
      from: "Nanoprobo <noreply@nanoprobo.com>",
      to: [data.email],
      subject,
      html: emailContent,
    })

    return { success: true, id: result.data?.id }
  } catch (error) {
    console.error("Failed to send verification email:", error)
    return { success: false, error: "Failed to send verification email" }
  }
}

export async function sendWelcomeEmail(email: string, type: "early-access" | "newsletter", firstName?: string) {
  if (!resend) {
    return { success: false, error: "Email service not configured" }
  }

  const subject =
    type === "early-access" ? "Welcome to Nanoprobo Early Access!" : "Welcome to the Nanoprobo Newsletter!"

  const emailContent =
    type === "early-access"
      ? getEarlyAccessWelcomeTemplate(firstName || "there")
      : getNewsletterWelcomeTemplate(firstName || "there")

  try {
    const result = await resend.emails.send({
      from: "Nanoprobo <hello@nanoprobo.com>",
      to: [email],
      subject,
      html: emailContent,
    })

    return { success: true, id: result.data?.id }
  } catch (error) {
    console.error("Failed to send welcome email:", error)
    return { success: false, error: "Failed to send welcome email" }
  }
}

function generateVerificationToken(email: string, type: string): string {
  const payload = {
    email,
    type,
    timestamp: Date.now(),
  }

  // In production, use proper JWT signing with a secret
  return Buffer.from(JSON.stringify(payload)).toString("base64url")
}

export function verifyToken(token: string): { email: string; type: string } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, "base64url").toString())

    // Check if token is not older than 24 hours
    const tokenAge = Date.now() - payload.timestamp
    if (tokenAge > 24 * 60 * 60 * 1000) {
      return null
    }

    return { email: payload.email, type: payload.type }
  } catch {
    return null
  }
}

function getEarlyAccessEmailTemplate(firstName: string, verificationUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirm your Early Access Request</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0891b2; margin: 0;">Nanoprobo</h1>
        </div>
        
        <h2 style="color: #333;">Hi ${firstName},</h2>
        
        <p>Thank you for your interest in Nanoprobo Early Access! We're excited to have you join our community of AI innovators.</p>
        
        <p>To complete your early access request, please click the button below to verify your email address:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #0891b2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Verify Email Address</a>
        </div>
        
        <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
        
        <p>This link will expire in 24 hours for security reasons.</p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="color: #666; font-size: 14px;">
          Best regards,<br>
          The Nanoprobo Team
        </p>
      </body>
    </html>
  `
}

function getNewsletterEmailTemplate(firstName: string, verificationUrl: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirm your Newsletter Subscription</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0891b2; margin: 0;">Nanoprobo</h1>
        </div>
        
        <h2 style="color: #333;">Hi ${firstName},</h2>
        
        <p>Thank you for subscribing to the Nanoprobo newsletter! We're thrilled to keep you updated on the latest AI innovations and insights.</p>
        
        <p>To complete your subscription, please click the button below to verify your email address:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #6366f1; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Verify Email Address</a>
        </div>
        
        <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #666;">${verificationUrl}</p>
        
        <p>This link will expire in 24 hours for security reasons.</p>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="color: #666; font-size: 14px;">
          Best regards,<br>
          The Nanoprobo Team
        </p>
      </body>
    </html>
  `
}

function getEarlyAccessWelcomeTemplate(firstName: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Nanoprobo Early Access!</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0891b2; margin: 0;">Nanoprobo</h1>
        </div>
        
        <h2 style="color: #333;">Welcome to Early Access, ${firstName}!</h2>
        
        <p>🎉 Congratulations! Your email has been verified and you're now part of our exclusive Early Access program.</p>
        
        <p>As an early access member, you'll be among the first to:</p>
        <ul>
          <li>Experience our cutting-edge AI features</li>
          <li>Receive priority support and feedback channels</li>
          <li>Get exclusive updates and behind-the-scenes content</li>
          <li>Influence the future direction of our platform</li>
        </ul>
        
        <p>We'll be in touch soon with your access credentials and next steps. Keep an eye on your inbox!</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}" style="background-color: #0891b2; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Visit Nanoprobo</a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="color: #666; font-size: 14px;">
          Thank you for joining us on this exciting journey!<br>
          The Nanoprobo Team
        </p>
      </body>
    </html>
  `
}

function getNewsletterWelcomeTemplate(firstName: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to the Nanoprobo Newsletter!</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0891b2; margin: 0;">Nanoprobo</h1>
        </div>
        
        <h2 style="color: #333;">Welcome to our newsletter, ${firstName}!</h2>
        
        <p>🎉 Thank you for confirming your subscription! You're now part of our community of AI enthusiasts and innovators.</p>
        
        <p>Here's what you can expect from our newsletter:</p>
        <ul>
          <li>Latest AI industry insights and trends</li>
          <li>Product updates and new feature announcements</li>
          <li>Expert tips and best practices</li>
          <li>Exclusive content and early access opportunities</li>
        </ul>
        
        <p>We typically send updates 1-2 times per month, and we promise to keep the content valuable and relevant.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}" style="background-color: #6366f1; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Visit Nanoprobo</a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <p style="color: #666; font-size: 14px;">
          Thanks for joining our community!<br>
          The Nanoprobo Team
        </p>
      </body>
    </html>
  `
}
