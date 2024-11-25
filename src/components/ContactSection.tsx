// src/components/ContactSection.tsx
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Entre em Contato
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos disponíveis 24 horas por dia, 7 dias por semana para atender
            suas emergências.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
            <Phone className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Telefone</h3>
            <p className="text-gray-300">13 3481-2824</p>
            <p className="text-gray-300">13 97401-6491</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
            <Mail className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-300">13 98846-4002</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
            <Clock className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Horário</h3>
            <p className="text-gray-300">Atendimento 24 horas</p>
            <p className="text-gray-300">Todos os dias</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg">
            <MapPin className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-xl font-bold mb-2">Região</h3>
            <p className="text-gray-300">Atendemos toda a Baixada Santista</p>
          </div>
        </div>
      </div>
    </section>
  );
}
