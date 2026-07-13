const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendResetEmail = async (email, resetToken) => {
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
  const resetLink = `${frontendUrl}/reset_password/${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to: email,
    subject: `Reset Your Password - ${process.env.SITE_NAME || "FileFlips"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; text-align: center;">Password Reset Request</h2>
        <p style="color: #555; font-size: 16px; line-height: 1.6;">
          We received a request to reset the password for your account associated with <strong>${email}</strong>.
        </p>
        <p style="color: #555; font-size: 16px; line-height: 1.6;">
          Click the button below to reset your password. This link will expire in <strong>15 minutes</strong>.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" style="background-color: #4F46E5; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: bold;">
            Reset Password
          </a>
        </div>
        <p style="color: #999; font-size: 13px; line-height: 1.5;">
          If you did not request a password reset, please ignore this email. Your password will remain unchanged.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #aaa; font-size: 12px; text-align: center;">
          ${process.env.SITE_NAME || "FileFlips"} - Secure File Conversion
        </p>
      </div>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = sendResetEmail;
