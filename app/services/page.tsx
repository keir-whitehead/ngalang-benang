import { PageIntro } from "@/components/site/page-intro";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        title="Services"
        subtitle="A practical, responsive service model supporting civil construction and Indigenous affairs objectives."
      />
      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 md:grid-cols-2 lg:px-8">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </main>
  );
}
