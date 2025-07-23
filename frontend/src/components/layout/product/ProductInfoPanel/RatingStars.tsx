import React from 'react';

interface Props {
  value: number;
  reviews: number;
  size?: 'sm' | 'md';
  className?: string;
}

export default function RatingStars({ value, reviews, size = 'md', className }: Props) {
  const starSize = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  const scoreClass = size === 'sm' ? 'text-gray-400 font-light' : 'text-gray-400 font-semibold';

  return (
    <div
      className={`flex items-center gap-2 ${size === 'sm' ? 'text-xs' : 'text-sm'} ${
        className ?? ''
      }`}
    >
      <span className={scoreClass}>{value.toFixed(1)}</span>
      <div className="flex leading-none">
        {[0, 1, 2, 3, 4].map(i => {
          const fillPct = Math.min(Math.max(value - i, 0), 1) * 100;
          return (
            <span key={i} className={`relative z-0 mr-0.5 ${starSize}`}>
              {/* base vacía */}
              <svg viewBox="0 0 24 24" className="w-full h-full text-gray-300" fill="currentColor">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z" />
              </svg>
              {/* capa llena recortada */}
              <svg
                viewBox="0 0 24 24"
                className="absolute left-0 top-0 w-full h-full text-[#3483FA]"
                fill="currentColor"
                style={{ clipPath: `inset(0 ${100 - fillPct}% 0 0)` }}
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z" />
              </svg>
            </span>
          );
        })}
      </div>
      <span className="text-gray-500">({reviews})</span>
    </div>
  );
}
