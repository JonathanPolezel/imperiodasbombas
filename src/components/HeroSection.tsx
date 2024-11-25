// src/components/HeroSection.tsx
import { Phone, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Serviços de Desentupimento e Manutenção 24 Horas
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Soluções profissionais para sua residência ou empresa com
              atendimento emergencial 24 horas por dia.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <span>Atendimento Emergencial 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <span>Profissionais Qualificados</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-secondary" />
                <span>Garantia de Serviço</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:1334812824"
                className="flex items-center justify-center space-x-2 bg-secondary text-primary px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Ligar Agora</span>
              </a>
              <a
                href="https://wa.me/13974016491"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="relative h-[400px] hidden md:block">
            <div className="absolute inset-0 bg-secondary/10 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Imagem Ilustrativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
