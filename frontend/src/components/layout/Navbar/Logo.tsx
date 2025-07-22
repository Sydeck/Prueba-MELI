import React from 'react';

export default function Logo(): JSX.Element {
  return (
    <div className="flex items-center">
      <picture>
        <source media="(max-width: 1023px)" srcSet="/images/navbar/logo-ml-small.png" />
        <source media="(min-width: 1024px)" srcSet="/images/navbar/logo-ml-large.png" />
        <img
          src="/images/navbar/logo-ml-large.png"
          alt="Mercado Libre"
          className="h-8 w-auto object-contain lg:h-auto lg:w-[134px]"
        />
      </picture>
    </div>
  );
}
