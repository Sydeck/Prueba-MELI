// src/components/footer/PopularProducts.tsx
import React from 'react';

interface Props {
  products: string[];
}

export default function PopularProducts({ products }: Props): JSX.Element {
  return (
    <section className="space-y-2 mx-4 lg:mx-0">
      <h3 className="text-base font-semibold mb-2">Productos más buscados</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {products.map((p, i) => (
          <React.Fragment key={p}>
            {p}
            {i < products.length - 1 && ' - '}
          </React.Fragment>
        ))}
      </p>
    </section>
  );
}
