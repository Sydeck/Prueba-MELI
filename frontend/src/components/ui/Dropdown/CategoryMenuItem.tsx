import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface Category {
  name: string;
  children?: Category[];
}

interface Props {
  category: Category;
  idx: number;
  activeIdx: number | null;
  setActiveIdx: (i: number | null) => void;
}

export function CategoryMenuItem({ category, idx, activeIdx, setActiveIdx }: Props) {
  const isActive = activeIdx === idx;

  return (
    <li
      className="relative"
      onMouseEnter={() => setActiveIdx(idx)}
      onMouseLeave={() => setActiveIdx(prev => (prev === idx ? null : prev))}
      onClick={() => setActiveIdx(0)} // Close dropdown
    >
      <button
        role="menuitem"
        className="
          w-full text-left px-5 py-2 text-sm font-normal
          hover:bg-ml-blue-dark hover:text-white
          transition-colors flex justify-between items-center
        "
      >
        <span>{category.name}</span>
        {category.children && <ChevronRight className="w-4 h-4 text-white" />}
      </button>

      {category.children && isActive && (
        <ul
          role="menu"
          className="
            absolute top-0 left-full w-56
            rounded-md shadow-md
            bg-[#333333] text-white py-2
            z-20
          "
        >
          {category.children.map(sub => (
            <li key={sub.name}>
              <button
                role="menuitem"
                className="
                  w-full text-left px-5 py-2 text-sm font-normal
                  hover:bg-ml-blue-dark hover:text-white
                  transition-colors
                "
              >
                {sub.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
