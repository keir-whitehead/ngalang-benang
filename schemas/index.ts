import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  phone: z.optional(z.string()),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});
