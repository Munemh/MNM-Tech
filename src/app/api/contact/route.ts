import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send form data to your email
    const internalMailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 2. Send confirmation email to user
    const userConfirmationOptions = {
      from: `"MNM Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We've received your message & will contact soon.",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting us. We've received your message and will get back to you soon.</p>
        <p>Best regards,<br/>Your Name or Company</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(internalMailOptions),
      transporter.sendMail(userConfirmationOptions),
    ]);

    return NextResponse.json(
      { message: 'Thank you! I have received your form and will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
