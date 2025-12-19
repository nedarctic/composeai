import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    /* ---------- DB: CREATE TABLE IF NOT EXISTS ---------- */
    await pool.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    /* ---------- DB: INSERT RECORD (ignore duplicates) ---------- */
    try {
      await pool.query(
        `
        INSERT INTO subscriptions (email)
        VALUES (?)
        `,
        [normalizedEmail]
      );
    } catch (dbError: any) {
      // MySQL error code 1062 = Duplicate entry
      if (dbError.code === "ER_DUP_ENTRY") {
        // Already subscribed – treat as success (user experience)
        // Optionally you could return a different message, but success is friendlier
      } else {
        throw dbError; // Re-throw other DB errors
      }
    }

    /* ---------- EMAIL ---------- */
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
      replyTo: normalizedEmail,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${normalizedEmail}</p>
        <p>This user has subscribed to the ScholarBrood newsletter.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}