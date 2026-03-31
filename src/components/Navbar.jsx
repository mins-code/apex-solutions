"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        backgroundColor: "rgba(5, 14, 14, 0.85)",
        borderBottom: "1px solid rgba(59, 191, 191, 0.12)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + Brand */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="Apex Solutions Logo"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
            priority
          />
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontWeight: 700,
                fontSize: "1.6rem",
                letterSpacing: "0.06em",
                background: "linear-gradient(135deg, #3bbfbf 0%, #c07a3a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              APEX
            </span>
            <span
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                background: "linear-gradient(135deg, #3bbfbf 0%, #c07a3a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.9,
              }}
            >
              SOLUTIONS
            </span>
          </span>
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {!isHome && (
            <Link
              href="/"
              style={{
                color: "#8baab4",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#3bbfbf")}
              onMouseLeave={(e) => (e.target.style.color = "#8baab4")}
            >
              Home
            </Link>
          )}
          <a
            href={`https://wa.me/91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Apex%20Solutions`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              background: "#25D366",
              color: "#ffffff",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1ebe5d";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#25D366";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
