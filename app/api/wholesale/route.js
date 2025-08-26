import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, business, email, message } = await req.json();

    // Outlook SMTP setup
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // use TLS
      auth: {
        user: process.env.EMAIL_USER, // gripwipes@outlook.com
        pass: process.env.EMAIL_PASS, // Outlook App Password
      },
    });

    await transporter.sendMail({
      from: `"Grip Wipes Wholesale" <${process.env.EMAIL_USER}>`,
      to: "gripwipes@outlook.com", // where inquiries are sent
      subject: "New Wholesale Inquiry - Grip Wipes",
      text: `
        Name: ${name}
        Business: ${business}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Wholesale Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending wholesale email:", err);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
