// src/components/layout/DesktopBanner.tsx
import React from 'react';

export default function DesktopBanner(): JSX.Element {
  return (
    <div className="hidden lg:flex items-center justify-end gap-3">
      <img
        src="/images/navbar/free-shipping.png"
        alt="Promo envío gratis"
        className="h-auto w-[340px] object-contain"
      />
    </div>
  );
}
