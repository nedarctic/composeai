import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || null;
    const email = formData.get("email")?.toString() || null;
    const subject = formData.get("subject")?.toString() || null;
    const message = formData.get("message")?.toString() || null;

    // Basic validation (all fields are required on frontend, but we double-check)
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    /* ---------- DB: CREATE TABLE IF NOT EXISTS ---------- */
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    /* ---------- DB: INSERT RECORD ---------- */
    await pool.query(
      `
      INSERT INTO contacts (name, email, subject, message)
      VALUES (?, ?, ?, ?)
      `,
      [name, email, subject, message]
    );

    /* ---------- EMAIL ---------- */
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ScholarBrood Contact" <info@scholarbrood.com>`,
      to: "info@scholarbrood.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br>")}</p>
        <hr>
        <small>Sent on: ${new Date().toLocaleString()}</small>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process contact message" },
      { status: 500 }
    );
  }
}