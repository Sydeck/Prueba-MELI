import React from 'react';

interface Props {
  oldPrice?: string;
  price: string;
  priceCents?: string;
  discountPct?: string;
  installments?: string;
  ivaText?: string;
}

export default function PricesBlock({
  oldPrice,
  price,
  priceCents,
  discountPct,
  installments,
  ivaText,
}: Props) {
  return (
    <div className="text-gray-900">
      {oldPrice && (
        <p className="line-through text-gray-400 text-base font-normal">
          {oldPrice}
          {priceCents && <sup>{priceCents}</sup>}
        </p>
      )}

      <div className="flex items-baseline">
        <span className="text-3xl font-normal leading-[38px]">
          {price}
          {priceCents && <sup className="text-xs font-normal top-[-14px]">{priceCents}</sup>}
        </span>
        {discountPct && (
          <span className="text-[#00A650] ml-2 text-lg font-normal">{discountPct}</span>
        )}
      </div>

      {installments && <p className="text-[#00A650] text-lg font-semibold my-2">{installments}</p>}
      {ivaText && <p className="text-xs text-gray-500 my-2">{ivaText}</p>}

      <button className="text-ml-blue-main text-sm hover:underline">Ver los medios de pago</button>
    </div>
  );
}
