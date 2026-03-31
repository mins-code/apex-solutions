import Link from "next/link";

export default function SoftwareProjectsPage() {
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
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl glass-panel border border-[#3bbfbf]/30 text-5xl mb-6 shadow-[0_0_40px_rgba(59,191,191,0.15)]">
          💻
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat tracking-tight font-bold text-white mb-6 leading-tight">
          Software Projects
        </h1>
        <p className="text-[#8b9bb4] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
          Custom-built software tailored to your final year project needs — delivered with full source code, documentation, and execution support.
        </p>
        <p className="text-[#8b9bb4] text-base leading-relaxed max-w-2xl mx-auto">
          From web applications to embedded C programs, we build functional software that meets your college&apos;s requirements. Every project is developed from scratch and explained thoroughly so you can present it confidently.
        </p>
      </section>

      {/* What We Build */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-8 tracking-tight text-center">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "🌐",
              title: "Web Applications",
              desc: "Full-stack web apps using React, Next.js, Node.js, and databases like MongoDB or MySQL. Includes UI, backend APIs, and deployment.",
            },
            {
              icon: "📱",
              title: "Mobile Apps",
              desc: "Android apps built with Java or Flutter — from simple utility tools to real-time IoT dashboards.",
            },
            {
              icon: "🤖",
              title: "Embedded & IoT Software",
              desc: "Firmware for Arduino, ESP32, Raspberry Pi, and other microcontrollers. Works hand-in-hand with our hardware rentals.",
            },
            {
              icon: "🧠",
              title: "AI / ML Projects",
              desc: "Python-based machine learning projects using TensorFlow, PyTorch, or Scikit-learn — image recognition, predictive models, and more.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-panel rounded-2xl p-6 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:border-[#3bbfbf]/40 hover:shadow-[0_0_30px_rgba(59,191,191,0.12)]"
            >
              <span className="text-3xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-[#8b9bb4] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-montserrat font-bold text-white mb-8 tracking-tight text-center">
          Our Process
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { step: "01", text: "You share your project topic, abstract, or module requirements with us." },
            { step: "02", text: "We scope the work, agree on deliverables and timeline via WhatsApp." },
            { step: "03", text: "We build and iteratively share progress with you." },
            { step: "04", text: "Final delivery with full source code, README, and a walkthrough session." },
          ].map((s) => (
            <div key={s.step} className="glass-panel rounded-xl p-5 flex items-center gap-5 border border-white/5">
              <span className="text-[#3bbfbf] font-bold text-2xl font-montserrat shrink-0">{s.step}</span>
              <p className="text-[#8b9bb4] text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto text-center">
        <p className="text-[#8b9bb4] mb-6 text-base">
          Have a project idea or abstract ready? Let&apos;s get started — reach out on WhatsApp.
        </p>
        <a
          href={`https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm interested in a software project")}`}
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
