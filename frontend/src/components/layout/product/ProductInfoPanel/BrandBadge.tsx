import React from 'react';
import { BadgeCheck } from 'lucide-react';
import clsx from 'clsx';
interface Props {
  logo: string;
  label: string;
  width?: string;
  height?: string;
}

export default function BrandBadge({ logo, label, width = 'w-6', height = 'h-6' }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm mr-4">
      <img
        src={logo}
        alt="Top brand"
        className={clsx('object-contain rounded-md', width, height)}
      />
      <button className="text-ml-blue-main hover:underline flex items-center">
        {label}
        <BadgeCheck className="w-5 h-5 ml-1" fill="#3483FA" stroke="#FFFFFF" strokeWidth={2} />
      </button>
    </div>
  );
}
