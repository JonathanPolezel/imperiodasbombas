// src/components/Footer.tsx
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.jpg"
              alt="Império das Bombas"
              width={180}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400">
              Serviços profissionais de desentupimento e manutenção de bombas
              com atendimento 24 horas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Manutenção de Bombas de Recalque</li>
              <li>Manutenção de Bombas em Geral</li>
              <li>Rebobinamento de Motores</li>
              <li>Tratamento de Piscina</li>
              <li>Contrato de Manutenção</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Telefone: 13 3481-2824</li>
              <li>WhatsApp: 13 97401-6491</li>
              <li>WhatsApp: 13 98846-4002</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Império das Bombas. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
