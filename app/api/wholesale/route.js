import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, business, email, message } = await req.json();

    // Transporter setup (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Grip Wipes Wholesale" <${process.env.EMAIL_USER}>`,
      to: "sales@getgripwipes.com", // where you want to receive inquiries
      subject: "New Wholesale Inquiry - Grip Wipes",
      text: `
        Name: ${name}
        Business: ${business}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending wholesale email:", err);
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
