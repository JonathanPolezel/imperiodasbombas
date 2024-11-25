// src/components/ServicesSection.tsx
import { Wrench, Droplet, Settings, Waves, ClipboardList } from "lucide-react";

const services = [
  {
    icon: <Wrench className="h-12 w-12 text-secondary" />,
    title: "Manutenção de Bombas de Recalque",
    description:
      "Serviços especializados de manutenção preventiva e corretiva para bombas de recalque.",
  },
  {
    icon: <Droplet className="h-12 w-12 text-secondary" />,
    title: "Manutenção de Bombas em Geral",
    description:
      "Atendimento técnico para todos os tipos de bombas e sistemas hidráulicos.",
  },
  {
    icon: <Settings className="h-12 w-12 text-secondary" />,
    title: "Rebobinamento de Motores",
    description:
      "Serviço profissional de rebobinamento e recuperação de motores elétricos.",
  },
  {
    icon: <Waves className="h-12 w-12 text-secondary" />,
    title: "Tratamento de Piscina",
    description:
      "Manutenção e tratamento completo para sua piscina, garantindo água limpa e segura.",
  },
  {
    icon: <ClipboardList className="h-12 w-12 text-secondary" />,
    title: "Contrato de Manutenção",
    description:
      "Planos personalizados de manutenção preventiva para sua tranquilidade.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços especializados para atender
            todas as suas necessidades de manutenção e reparo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
