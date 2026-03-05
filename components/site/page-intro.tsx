export function PageIntro({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-zinc-200">{subtitle}</p>
      </div>
    </section>
  );
}
