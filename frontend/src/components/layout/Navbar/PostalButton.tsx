// src/components/layout/PostalButton.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

export default function PostalButton(): JSX.Element {
  return (
    <div className="relative col-span-3 row-span-1 lg:col-span-1 lg:flex lg:items-center">
      {/* mobile divider line */}
      <hr
        className="
          absolute top-0 left-1/2 w-screen -translate-x-1/2
          border-t border-gray-300 lg:hidden
        "
      />

      <button
        type="button"
        className="
          flex items-center gap-2 pt-1
          text-ml-gray-dark hover:text-ml-blue-dark
          lg:items-start lg:pt-0
        "
      >
        <MapPin className="w-5 h-5 lg:w-6 lg:h-6 mt-[2px] lg:mt-0" />

        {/* Text block */}
        <div
          className="
            flex items-center gap-1
            text-left
            lg:flex-col lg:items-start lg:gap-0
            leading-none
          "
        >
          <span className="text-sm font-normal text-black whitespace-nowrap lg:text-xs lg:font-light">
            Ingresa tu
          </span>
          <span className="text-sm font-normal text-black whitespace-nowrap lg:text-sm">
            código postal
          </span>
        </div>
      </button>
    </div>
  );
}
