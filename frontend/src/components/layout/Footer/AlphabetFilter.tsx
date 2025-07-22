// src/components/footer/AlphabetFilter.tsx
import React from 'react';

interface Props {
  letters: string[];
  onSelect?: (letter: string) => void;
}

export default function AlphabetFilter({ letters, onSelect }: Props): JSX.Element {
  return (
    <section className="space-y-2 max-w-3xl mx-auto px-4 lg:px-0">
      <h4 className="text-base font-semibold text-black text-left">
        Buscar productos por letra inicial
      </h4>
      <nav
        className="
          flex flex-wrap justify-between
          gap-x-4 lg:gap-x-1 gap-y-4 lg:gap-y-1
          text-[12px] sm:text-sm text-gray-600
          lg:justify-start
        "
        aria-label="Filtrar por letra inicial"
      >
        {letters.map((l, i) => (
          <button
            key={l}
            type="button"
            onClick={() => onSelect?.(l)}
            className="px-1 hover:text-ml-blue-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-ml-blue-main"
          >
            {l}
            <span className="hidden lg:inline">{i < letters.length - 1 && ' -'}</span>
          </button>
        ))}
      </nav>
    </section>
  );
}
