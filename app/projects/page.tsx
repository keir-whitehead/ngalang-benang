import { PageIntro } from "@/components/site/page-intro";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        title="Projects"
        subtitle="Project categories and delivery areas where NGALANG BENANG supports clients and partners."
      />
      <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project}>
              <CardContent className="p-6 text-zinc-700">{project}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
