import React from 'react';
import { Search } from 'lucide-react';

export default function SearchInput(): JSX.Element {
  return (
    <div className="relative w-full h-8 lg:h-10">
      <input
        type="text"
        placeholder="Buscar productos, marcas y más..."
        aria-label="Buscar productos"
        className="
          w-full h-full
          rounded-sm
          pl-10
          bg-white text-sm
          focus:outline-none focus:ring-1 focus:ring-ml-blue-main
          lg:pl-4 lg:text-base
        "
      />
      <button
        type="button"
        aria-label="Buscar"
        className="
          absolute left-0 top-0
          h-full w-8
          flex items-center justify-center
          border-r lg:border-l text-gray-500
          hover:text-ml-blue-dark
          lg:w-10 lg:right-0 lg:justify-end lg:left-auto lg:pr-3
        "
      >
        <Search className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
      </button>
    </div>
  );
}
