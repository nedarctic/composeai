import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SUBSCRIPTION_EMAIL_USER,
        pass: process.env.SUBSCRIPTION_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ScholarBrood Newsletter" <subscriptions@scholarbrood.com>`,
      to: "subscriptions@scholarbrood.com",
      replyTo: email,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This user has subscribed to the ScholarBrood newsletter.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription email error:", error);
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}