import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fluza | Tu Vendedor Digital 24/7",
  description: "Automatización de ventas con IA. Fluza te ayuda a no perder clientes por falta de respuestas rápidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
