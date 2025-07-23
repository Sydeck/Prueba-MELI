import React from 'react';
import { BadgeCheck } from 'lucide-react';

interface Props {
  logo: string;
  label: string;
}

export default function BrandBadge({ logo, label }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm mr-4">
      <img src={logo} alt="Top brand" className="w-6 h-6 object-contain" />
      <button className="text-ml-blue-main hover:underline flex items-center">
        {label}
        <BadgeCheck className="w-5 h-5 ml-1" fill="#3483FA" stroke="#FFFFFF" strokeWidth={2} />
      </button>
    </div>
  );
}
