import React from 'react';
import QuantityDropdown from './QuantityDropdown';
import DeliveryInfo from './DeliveryInfo';
import Guarantees from './Guarantees';
import SellerCard from './SellerCard';
import { Seller } from '@/types/product.types';

interface BuyBoxProps {
  stock: number;
  qty: number;
  setQty: (n: number) => void;
  maxQty: number;
  seller: Seller;
  buyLabel?: string;
  addToCartLabel?: string;
}

export default function BuyBox({
  seller,
  stock,
  qty,
  setQty,
  maxQty,
  buyLabel = 'Comprar ahora',
  addToCartLabel = 'Agregar al carrito',
}: BuyBoxProps) {
  const isOutOfStock = stock <= 0;

  return (
    <div id="buy-box" className="lg:top-24" data-testid="buy-box">
      <div className="bg-white p-4 rounded-md shadow-md space-y-4">
        <DeliveryInfo stock={stock} />

        <QuantityDropdown qty={qty} setQty={setQty} stock={stock} maxQty={maxQty} />

        {/* Botones compra */}
        <div className="space-y-2">
          <button
            className="w-full h-11 bg-ml-blue-main text-white rounded-md hover:bg-ml-blue-dark disabled:opacity-50"
            aria-label={buyLabel}
            disabled={isOutOfStock}
          >
            {buyLabel}
          </button>
          <button
            className="w-full h-11 bg-[#4189E633] text-ml-blue-main rounded-md hover:bg-[#4189E650] disabled:opacity-50"
            aria-label={addToCartLabel}
            disabled={isOutOfStock}
          >
            {addToCartLabel}
          </button>
        </div>

        {/* Seller mobile */}
        <SellerCard image={seller.brandLogo} sellerName={seller.name} stock={stock} mobileOnly />

        <Guarantees />
      </div>
    </div>
  );
}
