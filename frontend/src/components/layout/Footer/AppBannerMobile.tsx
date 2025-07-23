// src/components/footer/AppBannerMobile.tsx
import React from 'react';

export default function AppBannerMobile(): JSX.Element {
  return (
    <div className="bg-[#FFF159] rounded-md px-10 py-3 my-8 flex items-center justify-center gap-4 h-16 lg:hidden">
      <div className="p-1 rounded-sm shadow-md bg-white">
        <img src="/images/navbar/logo-ml-small.png" alt="App" className="w-10 h-8 object-contain" />
      </div>
      <span className="text-base">¡Compra y vende con la app!</span>
    </div>
  );
}
