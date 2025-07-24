import React from 'react';
import { Zap } from 'lucide-react';

interface DeliveryInfoProps {
  stock: number;
}

export default function DeliveryInfo({ stock }: DeliveryInfoProps) {
  return (
    <div className="space-y-3 text-sm text-gray-700">
      <p className="text-base leading-5">
        <span className="block font-semibold text-[#00A650]">Llega gratis mañana</span>
        <span className="block text-sm text-gray-500">Comprando dentro de las próximas</span>
        <span className="block text-sm text-gray-500">20 h 52 min</span>
      </p>

      <button className="text-ml-blue-main text-xs hover:underline">Más formas de entrega</button>

      <p className="text-base">
        <span className="font-semibold text-[#00A650]">Retira gratis a partir de mañana</span>
        <span className="ml-1 text-gray-500">en correos y otros puntos</span>
        <span className="block text-sm text-gray-500">Comprando dentro de las próximas</span>
        <span className="block text-sm text-gray-500">18 h 52 min</span>
      </p>

      <button className="text-ml-blue-main text-xs hover:underline">Ver en el mapa</button>

      <div className="space-y-0.5">
        <p className="text-base font-semibold text-gray-900">Stock disponible</p>
        <p className="text-sm text-gray-500 flex items-center">
          Almacenado y enviado por
          <Zap className="w-4 h-4 mx-1 text-[#00A650]" strokeWidth={3} />
          <span className="text-lg text-[#00A650]">FULL</span>
        </p>
      </div>
    </div>
  );
}
