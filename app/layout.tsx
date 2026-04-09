import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matías Bellido — Optimizing Reality through Data & AI",
  description:
    "Actuario & Data Scientist. Automatización, modelos estadísticos y ejecución con IA.",
  openGraph: {
    title: "Matías Bellido — Data & AI",
    description: "Optimizing Reality through Data & AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
