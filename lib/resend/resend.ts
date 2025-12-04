"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResendEmail({
  ime,
  email,
  poruka,
}: {
  ime: string;
  email: string;
  poruka: string;
}) {
  await resend.emails.send({
    to: "grofsjewelry@gmail.com",
    from: "Grofs Jewelry <hello@grofsjewelry.com>",
    subject: `Email s webshopa od: ${ime}`,
    html: `
      <p><strong>Ime i Prezime:</strong> ${ime}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Poruka:</strong> ${poruka}</p>
    `,
  });
}
