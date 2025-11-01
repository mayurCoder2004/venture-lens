import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

(async () => {
  try {
    const info = await transporter.sendMail({
      from: 'mayursomnathpawar123@gmail.com',
    to: 'mayurpawar202004@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email from Brevo SMTP setup!',
    });

    console.log("✅ Email sent successfully:", info.messageId);
  } catch (err) {
    console.error("❌ Failed to send email:", err);
  }
})();
