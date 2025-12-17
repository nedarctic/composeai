import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const service = formData.get("service");
    const name = formData.get("name");
    const email = formData.get("email");
    const details = formData.get("details");
    const links = formData.get("links");
    const files = formData.getAll("files") as File[];

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.ORDER_EMAIL_USER,
        pass: process.env.ORDER_EMAIL_PASS,
      },
    });

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    await transporter.sendMail({
      from: `"ScholarBrood Orders" <orders@scholarbrood.com>`,
      to: "orders@scholarbrood.com",
      replyTo: email?.toString(),
      subject: "New Order Request – ScholarBrood",
      html: `
        <h2>New Order Request</h2>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Details:</strong></p>
        <p>${details}</p>
        <p><strong>External Links:</strong> ${links || "None"}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
