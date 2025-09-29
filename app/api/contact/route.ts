import { NextResponse } from "next/server"
import { sendEmail, type EmailData } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, subject, message, phone } = data as EmailData & { phone?: string }

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "All required fields must be filled" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long" },
        { status: 400 },
      )
    }

    // Check for RESEND_API_KEY
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { success: false, error: "Email service is not configured. Please try again later." },
        { status: 500 },
      )
    }

    // Send the email
    const result = await sendEmail({ name, email, subject, message, phone })

    if (result.success) {
      return NextResponse.json({
        success: true,
        messageId: result.messageId,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      })
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      {
        success: false,
        error:
          "We're experiencing technical difficulties. Please try again later or contact us directly at hokoinnovationET@gmail.com.",
      },
      { status: 500 },
    )
  }
}
