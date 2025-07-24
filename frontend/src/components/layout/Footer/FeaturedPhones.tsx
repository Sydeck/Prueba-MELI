// src/components/footer/FeaturedPhones.tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import { FeaturedBlock } from '@/types/footer.data';

interface FeaturedPhonesProps {
  blocks: FeaturedBlock[];
}

/**
 * Single featured block column (desktop) or accordion section (mobile)
 */
function FeaturedColumn({
  block,
  index,
  openIdx,
  setOpenIdx,
}: {
  block: FeaturedBlock;
  index: number;
  openIdx: number | null;
  setOpenIdx: (i: number | null) => void;
}) {
  const isOpen = openIdx === index;

  return (
    <div
      className={clsx(
        'divide-y divide-gray-200 lg:divide-y-0',
        index !== 0 && 'lg:border-l lg:border-gray-200 lg:pl-6'
      )}
    >
      {/* Mobile trigger. Desktop is static */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`feat-list-${index}`}
        className={clsx(
          'w-full flex justify-between items-center py-3 px-4 lg:px-0 lg:py-0',
          'lg:cursor-default lg:hover:text-inherit',
          'text-gray-900 font-medium'
        )}
        onClick={() => setOpenIdx(isOpen ? null : index)}
      >
        <span>{block.title}</span>
        <ChevronDown
          className={clsx(
            'w-4 h-4 transform transition-transform lg:hidden',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Items list */}
      <ul
        id={`feat-list-${index}`}
        className={clsx(
          'bg-[#f5f5f5] px-5 py-3 text-sm text-gray-600 space-y-2',
          'lg:bg-transparent lg:px-0 lg:py-2 lg:space-y-1',
          isOpen ? 'block' : 'hidden',
          'lg:block'
        )}
      >
        {block.items.map(item => (
          <li key={item} className="leading-tight hover:text-ml-blue-dark cursor-pointer">
            {item}
          </li>
        ))}

        {block.moreLabel && (
          <li className="mt-1">
            <button className="text-ml-blue-main text-xs hover:underline">{block.moreLabel}</button>
          </li>
        )}
      </ul>
    </div>
  );
}

/**
 * FeaturedPhones wrapper: responsibility = render “Destacado en Celulares y Telefonía” block
 */
export default function FeaturedPhones({ blocks }: FeaturedPhonesProps): JSX.Element {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className=" w-full max-w-screen-xl  mx-auto">
      <div className="bg-white rounded-md m-4 p-6 lg:m-8 lg:p-4 lg:mb-4 space-y-3">
        <h2 className="text-base font-medium text-gray-900 lg:text-lg">
          Destacado en Celulares y Telefonía
        </h2>

        <div
          className={clsx(
            'border rounded-md lg:border-0 lg:rounded-none',
            'lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0'
          )}
        >
          {blocks.map((block, i) => (
            <FeaturedColumn
              key={block.title}
              block={block}
              index={i}
              openIdx={openIdx}
              setOpenIdx={setOpenIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
