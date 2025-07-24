import React from 'react';

interface Props {
  facts: string[];
  onGoToSpecs: () => void;
}

export default function FactsBlock({ facts = [], onGoToSpecs }: Props) {
  return (
    <div className="hidden lg:block">
      <div className="bg-white rounded-md shadow-sm">
        <h2 className="text-base font-semibold mb-4">Lo que tienes que saber de este producto</h2>
        {facts.length > 0 ? (
          <ul
            data-testid="facts-list"
            className="list-disc list-outside pl-5 space-y-2 text-sm font-light text-gray-700 marker:text-gray-400"
          >
            {facts.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Sin información disponible</p>
        )}
      </div>

      <button
        type="button"
        data-testid="go-to-specs-btn"
        aria-label="Ver características completas"
        className="mt-4 text-ml-blue-main text-sm hover:underline"
        onClick={onGoToSpecs}
      >
        Ver características
      </button>
    </div>
  );
}
