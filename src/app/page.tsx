// src/app/page.tsx
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
