// app/page.tsx

export const metadata = {
  title: "Quiet Hand Creative",
  description: "Poised · Mindful · Modern · Tasteful · Credible",
  openGraph: {
    title: "Quiet Hand Creative",
    description: "Poised · Mindful · Modern · Tasteful · Credible",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiet Hand Creative",
    description: "Poised · Mindful · Modern · Tasteful · Credible",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="text-center py-20 border-b border-neutral-800">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Quiet Hand Creative
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Poised · Mindful · Modern · Tasteful · Credible
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#contact" className="rounded-2xl bg-white/90 text-black px-6 py-3 text-sm font-medium hover:bg-white">
            Work With Me
          </a>
          <a href="#portfolio" className="rounded-2xl border border-neutral-700 px-6 py-3 text-sm font-medium hover:bg-neutral-800">
            See Work
          </a>
        </div>
      </section>

      {/* Panels */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2">Sound</h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Executive production & engineering. Session guitar/bass/vocals. Talent sourcing (musicians & writers).
            Songwriting & ghostwriting. Audio cleanup & restoration. Scoring. Broadcast formatting. Podcast & audiobook editing.
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2">Vision</h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Production management for fashion, film & commercial shoots. Budgets, crews, logistics, delivery. BTS & social content.
            Design assets, screenprinting design, album artwork. Line production, storyboarding, script consulting.
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2">Form</h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Consulting for creative businesses: workflow design, growth strategy, process audits, templates, scaling frameworks,
            team systems. Structure that lets creativity thrive.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-3xl font-bold">Selected Work</h3>
          <a href="#contact" className="text-sm text-neutral-300 hover:text-white">
            Get the full portfolio →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <div className="aspect-video rounded-2xl bg-neutral-900 border border-neutral-800 grid place-items-center">
                <span className="text-neutral-500 text-sm">Project {i + 1}</span>
              </div>
              <div className="mt-3">
                <p className="font-medium">Project Title {i + 1}</p>
                <p className="text-sm text-neutral-400">Role • Year • Medium</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold mb-3">Let’s work</h3>
        <p className="text-neutral-300 mb-6">
          Tell me about your project, timeline, and goals. I’ll get back quickly with next steps.
        </p>
        <form className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Name" className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 outline-none" />
            <input type="email" placeholder="Email" className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 outline-none" />
          </div>
          <input placeholder="Company / Artist name" className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 outline-none" />
          <input placeholder="Service of interest (Sound / Vision / Form / Process)" className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 outline-none" />
          <textarea placeholder="Project details" className="bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 min-h-[140px] outline-none" />
          <button className="rounded-xl bg-white/90 text-black px-6 py-3 text-sm font-medium hover:bg-white w-max">
            Send Inquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Quiet Hand Creative</p>
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
