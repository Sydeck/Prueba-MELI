import React from 'react';
import { BadgeCheck } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  logo: string;
  label: string;
  width?: string;
  height?: string;
  showBadge?: boolean;
  badgeSize?: string;
  onClick?: () => void;
}

export default function BrandBadge({
  logo,
  label,
  width = 'w-6',
  height = 'h-6',
  showBadge = true,
  badgeSize = 'w-5 h-5',
  onClick,
}: Props) {
  return (
    <div className="flex items-center gap-2 text-sm mr-4" data-testid="brand-badge">
      <img src={logo} alt={label} className={clsx('object-contain rounded-md', width, height)} />
      <button
        type="button"
        onClick={onClick}
        aria-label={`Ver más sobre ${label}`}
        className="text-ml-blue-main hover:underline flex items-center"
      >
        {label}
        {showBadge && (
          <BadgeCheck
            className={clsx('ml-1', badgeSize)}
            fill="#3483FA"
            stroke="#FFFFFF"
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}
