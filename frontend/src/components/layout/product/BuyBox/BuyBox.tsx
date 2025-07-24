import React from 'react';
import QuantityDropdown from './QuantityDropdown';
import DeliveryInfo from './DeliveryInfo';
import Guarantees from './Guarantees';
import SellerCard from './SellerCard';

interface BuyBoxProps {
  stock: number;
  qty: number;
  setQty: (n: number) => void;
  maxQty: number;
}

export default function BuyBox({ stock, qty, setQty, maxQty }: BuyBoxProps) {
  return (
    <div id="buy-box" className="lg:top-24">
      <div className="bg-white p-4 rounded-md shadow-md space-y-4">
        <DeliveryInfo stock={stock} />

        <QuantityDropdown qty={qty} setQty={setQty} stock={stock} maxQty={maxQty} />

        {/* Botones compra */}
        <div className="space-y-2">
          <button className="w-full h-11 bg-ml-blue-main text-white rounded-md hover:bg-ml-blue-dark">
            Comprar ahora
          </button>
          <button className="w-full h-11 bg-[#4189E633] text-ml-blue-main rounded-md hover:bg-[#4189E650]">
            Agregar al carrito
          </button>
        </div>

        {/* Seller mobile */}
        <SellerCard stock={stock} mobileOnly />

        <Guarantees />
      </div>
    </div>
  );
}
