// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Império das Bombas | Desentupidora e Dedetizadora",
  description:
    "Serviços profissionais de desentupimento e dedetização 24 horas. Manutenção de bombas de recalque, tratamento de piscina e muito mais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
