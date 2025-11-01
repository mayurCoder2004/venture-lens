import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendInviteEmail = async (to, ideaTitle, invitedBy) => {
  const mailOptions = {
    from: `"VentureLens" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Collaboration Invite: ${ideaTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>🚀 You've Been Invited!</h2>
        <p><strong>${invitedBy}</strong> has invited you to collaborate on the idea:</p>
        <blockquote style="border-left: 4px solid #4F46E5; padding-left: 10px;">
          ${ideaTitle}
        </blockquote>
        <p>Login to your account on <b>VentureLens</b> to view and collaborate.</p>
        <br/>
        <p style="color: #888;">This email was sent automatically. Please do not reply.</p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("✅ Email sent:", info.messageId);
};
