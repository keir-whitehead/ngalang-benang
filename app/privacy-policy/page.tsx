import { PageIntro } from "@/components/site/page-intro";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageIntro
        title="Privacy Policy"
        subtitle="This policy explains how NGALANG BENANG handles personal information and communication records."
      />
      <section className="mx-auto w-full max-w-4xl space-y-4 px-6 py-14 text-zinc-700 lg:px-8">
        <p>
          NGALANG BENANG respects privacy and handles personal information in line with Australian privacy principles.
        </p>
        <p>
          We collect information required to respond to enquiries, manage projects, maintain compliance and provide
          ongoing communication with clients and stakeholders.
        </p>
        <p>
          For privacy enquiries, contact us via indigenous@ngalang.benang.com.au.
        </p>
      </section>
    </main>
  );
}
