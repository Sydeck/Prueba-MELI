// src/components/footer/AppBannerMobile.tsx
import React from 'react';

interface AppBannerMobileProps {
  imageSrc?: string;
  altText?: string;
  text?: string;
}

export default function AppBannerMobile({
  imageSrc = '/images/navbar/logo-ml-small.png',
  altText = 'App',
  text = '¡Compra y vende con la app!',
}: AppBannerMobileProps): JSX.Element {
  return (
    <div
      data-testid="app-banner-mobile"
      className="bg-[#FFF159] rounded-md px-10 py-3 my-8 flex items-center justify-center gap-4 h-16 lg:hidden"
    >
      <div className="p-1 rounded-sm shadow-md bg-white">
        <img src={imageSrc} alt={altText} className="w-10 h-8 object-contain" />
      </div>
      <span className="text-base">{text}</span>
    </div>
  );
}
