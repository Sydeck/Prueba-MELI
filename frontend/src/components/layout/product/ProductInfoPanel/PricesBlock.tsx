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
      {/* Precio tachado */}
      {oldPrice && (
        <p className="line-through text-gray-400 text-base font-normal" data-testid="old-price">
          {oldPrice}
          {priceCents && <sup>{priceCents}</sup>}
        </p>
      )}

      {/* Precio actual */}
      <div className="flex items-baseline">
        <span className="text-3xl font-normal leading-[38px]" data-testid="current-price">
          {price || '$0'}
          {priceCents && <sup className="text-xs font-normal top-[-14px]">{priceCents}</sup>}
        </span>
        {discountPct && (
          <span className="text-[#00A650] ml-2 text-lg font-normal" data-testid="discount">
            {discountPct}
          </span>
        )}
      </div>

      {/* Cuotas */}
      {installments && (
        <p className="text-[#00A650] text-lg font-semibold my-2" data-testid="installments">
          {installments}
        </p>
      )}

      {/* IVA */}
      {ivaText && (
        <p className="text-xs text-gray-500 my-2" data-testid="iva-text">
          {ivaText}
        </p>
      )}

      {/* Botón medios de pago */}
      <button
        type="button"
        aria-label="Ver medios de pago"
        className="text-ml-blue-main text-sm hover:underline"
        data-testid="payment-methods-btn"
      >
        Ver los medios de pago
      </button>
    </div>
  );
}
