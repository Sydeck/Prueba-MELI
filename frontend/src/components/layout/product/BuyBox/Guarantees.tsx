import React from 'react';
import { RotateCcw, ShieldCheck } from 'lucide-react';

export default function Guarantees() {
  return (
    <>
      <div className="flex items-start gap-2">
        <RotateCcw className="w-5 h-5 text-[#00A650] mt-0.5 flex-shrink-0" />
        <div className="leading-tight">
          <span className="block text-sm font-semibold text-[#00A650]">Devolución gratis.</span>
          <span className="block text-xs text-gray-500">Tienes 30 días desde que lo recibes.</span>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <ShieldCheck className="w-5 h-5 text-[#00A650] mt-0.5 flex-shrink-0" />
        <div className="leading-tight">
          <span className="block text-sm font-semibold text-[#00A650]">Compra Protegida</span>
          <span className="block text-xs text-gray-500">
            Recibe el producto que esperabas o te devolvemos tu dinero.
          </span>
        </div>
      </div>
    </>
  );
}
