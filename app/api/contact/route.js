import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, business, email, message } = body;

  try {
    let transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey", // required by SendGrid
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    await transporter.sendMail({
      from: "gripwipes@outlook.com", // must match your verified sender
      to: "gripwipes@outlook.com",   // where you receive the emails
      replyTo: email,                // lets you reply directly to customer
      subject: "New Wholesale Inquiry",
      html: `
        <h2>New Wholesale Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, message: "Email failed to send.", error: error.message },
      { status: 500 }
    );
  }
}
