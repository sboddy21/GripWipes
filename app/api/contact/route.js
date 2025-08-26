import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, business, email, message } = body;

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.OUTLOOK_USER,
        pass: process.env.OUTLOOK_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
      },
    });

    await transporter.sendMail({
      from: `"Grip Wipes Wholesale" <${process.env.OUTLOOK_USER}>`,
      to: process.env.OUTLOOK_USER,
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
