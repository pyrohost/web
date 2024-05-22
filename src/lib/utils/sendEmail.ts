import { createTransport } from "nodemailer";

export const mailTransport = createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to: string, subject: string, html: string) {
  await mailTransport.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html,
  });
}