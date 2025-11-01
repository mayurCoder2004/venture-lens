import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendInviteEmail = async (to, ideaTitle, invitedBy) => {
  const mailOptions = {
    from: `"Idea Collaboration Platform" <noreply@ideaproj.com>`,
    to,
    subject: `Collaboration Invite: ${ideaTitle}`,
    text: `${invitedBy} has invited you to collaborate on the idea "${ideaTitle}".`,
    html: `
      <h2>You've been invited!</h2>
      <p><strong>${invitedBy}</strong> has invited you to collaborate on the idea:</p>
      <blockquote>${ideaTitle}</blockquote>
      <p>Login to your account to view and collaborate.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
