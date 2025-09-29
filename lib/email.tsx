import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const { name, email, phone, subject, message } = data

  try {
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #1e40af 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #7c3aed; margin-top: 0; margin-bottom: 20px; font-size: 20px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Name:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${email}</span>
            </div>
            
            ${
              phone
                ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Phone:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${phone}</span>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151;">Subject:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151;">Message:</strong>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed; margin-top: 10px;">
              <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This message was sent from the HOKO Innovation website contact form.
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 5px 0 0 0;">
              Received on ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    `

    const { data: emailResult, error } = await resend.emails.send({
      from: "HOKO Innovation <noreply@hokoinnovation.org>",
      to: ["hokoinnovationET@gmail.com"],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: emailContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send email" }
    }

    console.log("Email sent successfully:", emailResult)
    return { success: true, messageId: emailResult?.id }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
