import React from 'react';
import clsx from 'clsx';

interface ToggleButtonProps {
  open: boolean;
  onClick: () => void;
}

export function ToggleButton({ open, onClick }: ToggleButtonProps) {
  return (
    <div className="relative flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="bg-white px-6 py-2 text-sm text-gray-700 flex items-center rounded-t-md"
        aria-expanded={open}
      >
        Más información
        <span className={clsx('ml-1 transition-transform', open ? 'rotate-180' : 'rotate-0')}>
          ▼
        </span>
      </button>
    </div>
  );
}
