import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const service = formData.get("service")?.toString() || null;
    const name = formData.get("name")?.toString() || null;
    const email = formData.get("email")?.toString() || null;
    const details = formData.get("details")?.toString() || null;
    const links = formData.get("links")?.toString() || null;
    const files = formData.getAll("files") as File[];

    /* ---------- DB: CREATE TABLE IF NOT EXISTS ---------- */
    await pool.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        service VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        details TEXT NOT NULL,
        links TEXT NULL,
        files JSON NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    /* ---------- DB: INSERT RECORD ---------- */
    const fileMeta =
      files.length > 0
        ? files.map((f) => ({
            name: f.name,
            size: f.size,
            type: f.type,
          }))
        : null;

    await pool.query(
      `
      INSERT INTO orders (service, name, email, details, links, files)
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        service,
        name,
        email,
        details,
        links,
        fileMeta ? JSON.stringify(fileMeta) : null,
      ]
    );

    /* ---------- EMAIL ---------- */
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
      replyTo: email || undefined,
      subject: "New Order Request",
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
    console.error("ORDER ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process order" },
      { status: 500 }
    );
  }
}
