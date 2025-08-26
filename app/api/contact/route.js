import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, business, email, message } = req.body;

    try {
      // Create the transporter (Outlook SMTP)
      let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.OUTLOOK_USER, // gripwipes@outlook.com
          pass: process.env.OUTLOOK_PASS, // your Outlook password or app password
        },
      });

      // Send the email
      await transporter.sendMail({
        from: `"Grip Wipes Wholesale" <${process.env.OUTLOOK_USER}>`,
        to: process.env.OUTLOOK_USER, // send to yourself
        subject: "New Wholesale Inquiry",
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

      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Email failed to send." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
