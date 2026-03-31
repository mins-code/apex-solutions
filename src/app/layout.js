import { Outfit, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";

// Modern, geometric sans-serif for regular text
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Elegant, cinematic serif for the main Apex headings
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

// Clean, geometric bold for specific technical headings
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Apex Solutions – Hardware Rentals, IEEE Projects & Software for Engineering Students in Bengaluru",
  description:
    "Apex Solutions offers hardware project rentals, custom software development, IEEE research papers, PPT design, and end-to-end project support for engineering students in Bengaluru.",
  openGraph: {
    title:
      "Apex Solutions – Hardware Rentals, IEEE Projects & Software for Engineering Students in Bengaluru",
    description:
      "Apex Solutions offers hardware project rentals, custom software development, IEEE research papers, PPT design, and end-to-end project support for engineering students in Bengaluru.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${outfit.variable} ${cinzel.variable} ${montserrat.variable} font-sans antialiased bg-dark-bg text-white`}
      >
        <Navbar />
        <div style={{ paddingTop: "64px" }}>{children}</div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
