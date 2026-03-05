import { PageIntro } from "@/components/site/page-intro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title="About"
        subtitle="A Western Australian delivery partner centred on civil excellence, Indigenous opportunity and long-term trust."
      />
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 lg:grid-cols-2 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Who We Are</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-700">
            <p>{siteConfig.tagline}</p>
            <p>
              We combine practical delivery capability with culturally informed engagement to support clients, projects
              and communities across Western Australia.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>How We Work</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-700">
            <p>Safety first, clear communication and consistent site performance.</p>
            <p>Measured commitments across workforce participation, quality and schedule outcomes.</p>
            <p>Long-term partnerships with clients, suppliers and communities.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
