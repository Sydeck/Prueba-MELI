// src/components/footer/ColumnsGrid.tsx
import React from 'react';
import clsx from 'clsx';
import { InfoColumn } from '@/types/footer.data';

interface ColumnsGridProps {
  columns: InfoColumn[];
  /** Center blocks/text on mobile, left-align on large screens */
  centerOnMobile?: boolean;
  /** Extra classes for the outer wrapper if you need tweaks */
  className?: string;
}

export function ColumnsGrid({
  columns,
  centerOnMobile = true,
  className,
}: ColumnsGridProps): JSX.Element {
  return (
    <div className={clsx('w-full bg-white', className)}>
      {/* Constrain and center the whole grid */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
        <div
          className={clsx(
            // Grid definition
            'grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 py-10',
            // Center items on small screens, left on desktop
            centerOnMobile ? 'place-items-center lg:place-items-start' : 'place-items-start'
          )}
        >
          {columns.map(col => (
            <div
              key={col.title}
              className={clsx(
                // Text alignment swap
                centerOnMobile ? 'text-center lg:text-left' : 'text-left',
                'w-full'
              )}
            >
              <h4 className="text-sm font-semibold text-gray-800 mb-3">{col.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {col.links.map(link => (
                  <li key={link} className="hover:text-ml-blue-dark cursor-pointer inline-block">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
