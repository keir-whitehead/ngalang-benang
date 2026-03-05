import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";

import { PageIntro } from "@/components/site/page-intro";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <PageIntro title="Contact" subtitle="Get in touch with our team for civil works and Indigenous affairs enquiries." />
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 lg:grid-cols-2 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Send an Enquiry</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Full name" aria-label="Full name" />
            <Input type="email" placeholder="Email address" aria-label="Email address" />
            <Input placeholder="Phone number" aria-label="Phone number" />
            <Textarea placeholder="Message" aria-label="Message" />
            <Button type="button" className="w-full">
              Submit
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-700">
            <p className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4" aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4" aria-hidden="true" />
              <span>Civil Works: {siteConfig.phoneCivil}</span>
            </p>
            <p className="flex items-start gap-3">
              <PhoneCall className="mt-1 h-4 w-4" aria-hidden="true" />
              <span>Indigenous Affairs: {siteConfig.phoneIndigenous}</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4" aria-hidden="true" />
              <span>
                {siteConfig.addressLine1}
                <br />
                {siteConfig.addressLine2}
              </span>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
