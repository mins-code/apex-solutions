import Link from "next/link";

export default function PPTReportsPage() {
  return (
    <main className="min-h-screen pt-12 pb-20 px-6 md:px-12 lg:px-24">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 glass-panel hover:bg-white/10 text-white rounded-full transition-all text-sm font-semibold tracking-widest uppercase border border-white/20 shadow-lg group"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-panel border border-glass-accent/30 text-5xl mb-6 shadow-[0_0_40px_rgba(79,70,229,0.2)]">
          📊
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat tracking-tight font-bold text-white mb-6 leading-tight">
          PPT &amp; Reports
        </h1>
        <p className="text-[#8b9bb4] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
          Professional-grade presentations and project documentation — crafted to impress your panel and meet university submission requirements.
        </p>
        <p className="text-[#8b9bb4] text-base leading-relaxed max-w-2xl mx-auto">
          Whether it&apos;s your review presentation or final project report, we help you communicate your work clearly and professionally. Our deliverables are structured, visually polished, and tailored to your specific project.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PPT */}
          <div className="glass-panel rounded-2xl p-8 border border-glass-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]">
            <span className="text-4xl mb-4 block">🖥️</span>
            <h2 className="text-white font-bold text-xl mb-3">Presentation (PPT)</h2>
            <p className="text-[#8b9bb4] text-sm leading-relaxed mb-4">
              We design clean, structured PowerPoint presentations using a professional template. Covers introduction, problem statement, block diagram, modules, results, and conclusion.
            </p>
            <ul className="space-y-2">
              {[
                "10–20 slides based on your requirements",
                "Block diagrams, flowcharts, and result screenshots",
                "Review 1, Review 2, and Final Review versions",
                "Delivered as .pptx and PDF",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#8b9bb4] text-sm">
                  <span className="text-glass-accent mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Report */}
          <div className="glass-panel rounded-2xl p-8 border border-glass-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]">
            <span className="text-4xl mb-4 block">📋</span>
            <h2 className="text-white font-bold text-xl mb-3">Project Report</h2>
            <p className="text-[#8b9bb4] text-sm leading-relaxed mb-4">
              A complete, formatted project report following your university&apos;s guidelines — with proper headings, chapter divisions, and references.
            </p>
            <ul className="space-y-2">
              {[
                "Chapter-wise structure (Intro, Literature, Design, Implementation, Results)",
                "Formatted as per VTU / other university norms",
                "Includes abstract, acknowledgements, contents page",
                "Delivered as Word + PDF",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#8b9bb4] text-sm">
                  <span className="text-glass-accent mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="max-w-3xl mx-auto mb-16">
        <div className="glass-panel rounded-2xl p-6 border border-white/10 flex gap-4 items-start">
          <span className="text-2xl shrink-0">💡</span>
          <p className="text-[#8b9bb4] text-sm leading-relaxed">
            We also offer <span className="text-white font-medium">bundled packages</span> — PPT + Report + IEEE Paper together at a reduced rate. Reach out on WhatsApp to discuss your exact requirements and deadlines.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto text-center">
        <p className="text-[#8b9bb4] mb-6 text-base">
          Tell us your project topic and submission date — we&apos;ll take it from there.
        </p>
        <a
          href={`https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need a PPT and report")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Enquire on WhatsApp
        </a>
      </section>
    </main>
  );
}
