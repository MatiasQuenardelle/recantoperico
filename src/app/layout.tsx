import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Recanto do Perico — Guarda do Embaú | Apartamentos para Temporada",
  description:
    "Apartamentos aconchegantes para temporada em Guarda do Embaú, SC. 6 apartamentos com Wi-Fi, ar condicionado e churrasqueira. Reserve com a Niceia!",
  keywords:
    "Guarda do Embaú, apartamento temporada, aluguel, praia, Santa Catarina, Recanto do Perico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
