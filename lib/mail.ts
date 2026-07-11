"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (
  name: string,
  email: string,
  phone: string | undefined,
  message: string
) => {
  await resend.emails.send({
    from: "indigenous@ngalang.benang.com.au",
    to: "indigenous@ngalang.benang.com.au",
    subject: "Contact form email",
    html: `<p>New contact form submission</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${
      phone ? phone : "N/A"
    }</p><p>Message: ${message}</p>`,
  });
};
