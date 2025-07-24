// src/components/layout/product/SpecsTable.tsx
import React, { useState } from 'react';
import clsx from 'clsx';

export interface SpecItem {
  label: string;
  value: string;
}

interface SpecsTableProps {
  id?: string;
  title?: string;
  specs: SpecItem[]; // Lista plana (ya ordenada)
  initialVisible?: number; // Cuántas filas se ven antes de "Ver más"
  className?: string;
}

export default function SpecsTable({
  id = 'product-specs',
  title = 'Características principales',
  specs,
  initialVisible = 6,
  className,
}: SpecsTableProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const showAll = open || specs.length <= initialVisible;
  const rows = showAll ? specs : specs.slice(0, initialVisible);

  return (
    <section id={id} className={clsx('bg-white p-4 rounded-md shadow-sm', className)}>
      <h2 className="text-base font-semibold mb-4">{title}</h2>

      {/* Tabla tipo Mercado Libre: 2 columnas (label/value), filas divididas */}
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 divide-y divide-gray-200 text-sm">
        {rows.map(({ label, value }) => (
          <div key={label} className="py-2 grid grid-cols-[120px_1fr] gap-x-3">
            <dt className="text-gray-500 break-words">{label}</dt>
            <dd className="text-gray-800 break-words">{value}</dd>
          </div>
        ))}
      </dl>

      {!showAll && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 text-ml-blue-main text-sm hover:underline"
        >
          Ver más características
        </button>
      )}

      {showAll && specs.length > initialVisible && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-4 text-ml-blue-main text-sm hover:underline"
        >
          Ver menos
        </button>
      )}
    </section>
  );
}
