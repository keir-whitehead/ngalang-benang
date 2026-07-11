"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FadeIn } from "./FadeIn";
import { ContactFormSchema } from "@/schemas";
import { sendContactEmail } from "@/lib/mail";
import { toast } from "sonner";

const contact = async (values: z.infer<typeof ContactFormSchema>) => {
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Please check the form and try again." };
  }

  const { name, email, phone, message } = validatedFields.data;
  await sendContactEmail(name, email, phone, message);
  return { success: true };
};

export default function Contact() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    try {
      const data = await contact(values);
      if (data.error) {
        toast.error(data.error);
        return;
      }
      form.reset();
      toast.success("Thanks — your enquiry has been sent.");
    } catch {
      toast.error("We couldn’t send your enquiry. Please email or call us directly.");
    }
  };

  return (
    <FadeIn>
      <section className="bg-white py-20 sm:py-28" id="contact">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-[2rem] bg-stone-950 text-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-700/35 blur-3xl" />
              <div className="relative max-w-lg">
                <p className="eyebrow text-yellow-300">Start a conversation</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Let’s build something that lasts
                </h2>
                <p className="mt-5 text-base leading-7 text-stone-300">
                  Talk with our civil works or Indigenous affairs team about projects,
                  procurement, employment and training opportunities.
                </p>
                <p className="mt-7 text-sm leading-6 text-stone-400">
                  NGALANG.BENANG · ABN 52 695 365 667
                </p>
                <dl className="mt-10 space-y-6 text-sm leading-7 text-stone-200">
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="flex gap-4">
                      <BuildingOffice2Icon className="h-6 w-6 shrink-0 text-yellow-300" aria-hidden="true" />
                      <span>Unit 6/20 Dellamarta Road<br />Wangara WA 6065</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Telephone</dt>
                    <dd className="flex gap-4">
                      <PhoneIcon className="h-6 w-6 shrink-0 text-yellow-300" aria-hidden="true" />
                      <span>
                        <a className="transition hover:text-yellow-300" href="tel:+61451674249">Civil Works: 0451 674 249</a><br />
                        <a className="transition hover:text-yellow-300" href="tel:+61406452401">Indigenous Affairs: 0406 452 401</a>
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd className="flex gap-4">
                      <EnvelopeIcon className="h-6 w-6 shrink-0 text-yellow-300" aria-hidden="true" />
                      <a className="break-all transition hover:text-yellow-300" href="mailto:indigenous@ngalang.benang.com.au">
                        indigenous@ngalang.benang.com.au
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-[#f7f3eb] px-6 py-12 text-stone-950 sm:px-10 lg:px-12 lg:py-16"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold">Send an enquiry</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">We’ll direct your message to the right team.</p>
                </div>
                <div className="space-y-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl><Input className="h-12 bg-white" autoComplete="name" placeholder="Your name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input className="h-12 bg-white" type="email" autoComplete="email" placeholder="you@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl><Input className="h-12 bg-white" type="tel" autoComplete="tel" placeholder="0400 000 000" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl><Textarea className="min-h-36 bg-white" placeholder="Tell us about your project or enquiry" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button
                    className="mt-2 h-12 rounded-full bg-red-700 px-6 font-bold hover:bg-red-800"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Sending…" : "Send enquiry"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
