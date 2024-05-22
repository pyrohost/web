import nodemailer from 'nodemailer';


export async function sendEmail(to: string, subject: string, html: string, provider: any) {
    const mailTransport = nodemailer.createTransport(provider.server)

    await mailTransport.sendMail({
        from: process.env.SMTP_FROM,
        to,
        subject,
        html,
    });
}