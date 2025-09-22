import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, projectIdea } = await request.json()

    // Validate required fields
    if (!name || !email || !projectIdea) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'vishnuvishnu49373@gmail.com', // Your email where you want to receive messages
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569;">Name:</strong>
              <span style="color: #64748b; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569;">Email:</strong>
              <span style="color: #64748b; margin-left: 10px;">${email}</span>
            </div>
            
            
            <div style="margin-top: 25px;">
              <h3 style="color: #1e293b; margin-bottom: 10px;">Project Idea:</h3>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
                <p style="color: #475569; line-height: 1.6; margin: 0;">${projectIdea.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                This message was sent from your portfolio contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Project Inquiry from ${name}
        
        Contact Details:
        Name: ${name}
        Email: ${email}
        
        Project Idea:
        ${projectIdea}
        
        ---
        This message was sent from your portfolio contact form.
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
