"use client";

export default function Home() {

  return (
    <main className="min-h-screen pt-12 pb-20 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto py-16 md:py-24 mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat tracking-tight font-bold text-white mb-6 leading-tight">
          Your Project,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3bbfbf 0%, #c07a3a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Done Right
          </span>
        </h1>
        <p className="text-[#8baab4] text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Hardware rentals, software projects, IEEE papers, PPTs, and custom builds — for all engineering students in Bengaluru
        </p>
        <a
          href={`https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Apex%20Solutions`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with Us on WhatsApp
        </a>
      </section>

      {/* What We Offer */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white text-center mb-4 tracking-tight">
          What We Offer
        </h2>
        <p className="text-[#8baab4] text-center mb-10 max-w-xl mx-auto">
          Everything you need to bring your project to life — all in one place.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            {
              emoji: "🔧",
              title: "Hardware Rentals",
              desc: "Rent working hardware projects for any demo or presentation",
              href: "/services/hardware-rentals",
            },
            {
              emoji: "💻",
              title: "Software Projects",
              desc: "Custom web, app, and embedded software with full code",
              href: "/services/software-projects",
            },
            {
              emoji: "📄",
              title: "IEEE Papers",
              desc: "Research papers formatted to IEEE standards",
              href: "/services/ieee-papers",
            },
            {
              emoji: "📊",
              title: "PPT & Reports",
              desc: "Professional presentations and project documentation",
              href: "/services/ppt-reports",
            },
            {
              emoji: "🛠️",
              title: "Custom Hardware",
              desc: "Got an idea? We'll build it. Contact us to discuss",
              href: "/services/custom-hardware",
            },
          ].map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center gap-3 no-underline"
              style={{
                transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(59,191,191,0.4)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(59,191,191,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(59,191,191,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="text-4xl mb-1 select-none">{s.emoji}</span>
              <h3 className="text-white font-semibold text-sm md:text-base leading-snug">
                {s.title}
              </h3>
              <p className="text-[#8baab4] text-xs md:text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#3bbfbf]">
                Learn More →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
