// src/components/Header.tsx
import Image from "next/image";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Império das Bombas"
              width={300}
              height={90}
              className="h-40 w-auto"
            />
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-secondary" />
              <a href="tel:1334812824" className="text-lg font-medium">
                13 3481-2824
              </a>
            </div>
            <div className="text-sm">Atendimento 24h</div>
          </div>
        </div>
      </div>
    </header>
  );
}
