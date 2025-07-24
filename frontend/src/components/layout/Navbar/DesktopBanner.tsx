// src/components/layout/DesktopBanner.tsx
import React from 'react';

interface DesktopBannerProps {
  src?: string;
  alt?: string;
}

export default function DesktopBanner({
  src = '/images/navbar/free-shipping.png',
  alt = 'Promo envío gratis',
}: DesktopBannerProps): JSX.Element {
  return (
    <div className="hidden lg:flex items-center justify-end gap-3">
      <img
        data-testid="desktop-banner-image"
        src={src}
        alt={alt}
        className="h-auto w-[340px] object-contain"
      />
    </div>
  );
}
