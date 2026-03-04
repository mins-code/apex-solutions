import { Outfit, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

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
  title: "Apex Solutions",
  description: "Hardware Rentals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${cinzel.variable} ${montserrat.variable} font-sans antialiased bg-dark-bg text-white`}
      >
        {children}
      </body>
    </html>
  );
}
