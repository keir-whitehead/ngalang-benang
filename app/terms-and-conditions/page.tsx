import { PageIntro } from "@/components/site/page-intro";

export default function TermsPage() {
  return (
    <main>
      <PageIntro
        title="Terms & Conditions"
        subtitle="Website access and use is subject to these terms and applicable Australian law."
      />
      <section className="mx-auto w-full max-w-4xl space-y-4 px-6 py-14 text-zinc-700 lg:px-8">
        <p>
          Content on this website is provided for general information and may change without notice.
        </p>
        <p>
          Users must not reproduce or distribute website content without prior written consent from NGALANG BENANG.
        </p>
        <p>
          To discuss project-specific terms, contact us at indigenous@ngalang.benang.com.au.
        </p>
      </section>
    </main>
  );
}
