import React from 'react';
import { RotateCcw, ShieldCheck } from 'lucide-react';

export interface GuaranteeItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface GuaranteesProps {
  items?: GuaranteeItem[];
}

export default function Guarantees({
  items = [
    {
      icon: <RotateCcw className="w-5 h-5 text-[#00A650]" aria-label="Devolución gratis" />,
      title: 'Devolución gratis.',
      description: 'Tienes 30 días desde que lo recibes.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00A650]" aria-label="Compra protegida" />,
      title: 'Compra Protegida',
      description: 'Recibe el producto que esperabas o te devolvemos tu dinero.',
    },
  ],
}: GuaranteesProps) {
  return (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          {item.icon}
          <div className="leading-tight">
            <span className="block text-sm font-semibold text-[#00A650]">{item.title}</span>
            <span className="block text-xs text-gray-500">{item.description}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
