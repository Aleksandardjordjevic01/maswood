import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Nedostaju polja." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Maswood Forma" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `Nova poruka sa sajta — ${service || "Opšto"}`,
    html: `
      <h2>Nova poruka sa maswood.rs</h2>
      <p><strong>Ime:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Usluga:</strong> ${service || "—"}</p>
      <p><strong>Poruka:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
