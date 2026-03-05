import Image from "next/image";
import { Building2, Mail, Phone, PhoneCall } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-site-gradient px-6 py-12 text-zinc-900 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="rounded-3xl border border-zinc-200/80 bg-white/85 p-8 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Image
              src="/logo.png"
              alt="NGALANG BENANG logo"
              width={88}
              height={88}
              className="h-20 w-20 rounded-xl border border-zinc-200 object-cover sm:h-[88px] sm:w-[88px]"
              priority
            />
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.22em] text-zinc-500">WELCOME</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                NGALANG BENANG
              </h1>
              <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                A Joint Venture between Sanning Pty Ltd &amp; Yakiny Moorditj Indigenous
                Corporation
              </p>
            </div>
          </div>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Business Details</CardTitle>
            <CardDescription>Registered and operating in Western Australia.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-medium text-zinc-900">ABN: 52 695 365 667</p>
          </CardContent>
        </Card>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>For project enquiries and community engagement.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm sm:text-base">
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-zinc-500" aria-hidden="true" />
                <span>indigenous@ngalang.benang.com.au</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-zinc-500" aria-hidden="true" />
                <span>Civil Works: 0451 674 249</span>
              </p>
              <p className="flex items-start gap-3">
                <PhoneCall className="mt-0.5 h-4 w-4 text-zinc-500" aria-hidden="true" />
                <span>Indigenous Affairs: 0406 452 401</span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Address</CardTitle>
              <CardDescription>Primary office location.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm sm:text-base">
              <p className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-4 w-4 text-zinc-500" aria-hidden="true" />
                <span>
                  Unit 6/20 Dellamarta Road
                  <br />
                  Wangara 6065
                </span>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
