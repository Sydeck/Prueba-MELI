import React from 'react';
import { BadgeCheck } from 'lucide-react';

interface SellerCardProps {
  image: string;
  sellerName: string;
  stock: number;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

export default function SellerCard({
  image,
  sellerName,
  stock,
  mobileOnly,
  desktopOnly,
}: SellerCardProps) {
  return (
    <div
      id="seller-info"
      className={`bg-white p-4 rounded-md shadow-sm ${
        mobileOnly ? 'lg:hidden' : desktopOnly ? 'hidden lg:block' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <img src={image} alt={sellerName} className="w-10 h-10 object-contain rounded-md" />

        <div className="flex flex-col gap-1">
          <p className="flex items-center text-sm text-gray-700">
            Tienda oficial de&nbsp;
            <span className="font-semibold text-gray-900">NOTHING TECH</span>
            <BadgeCheck
              className="w-4 h-4 ml-1"
              fill="#3483FA"
              stroke="#FFFFFF"
              strokeWidth={2}
              aria-hidden="true"
            />
          </p>

          <p className="text-xs text-gray-500">+{stock} vendidos</p>
        </div>
      </div>
    </div>
  );
}
