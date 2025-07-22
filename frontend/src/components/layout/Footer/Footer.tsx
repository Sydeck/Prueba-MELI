// src/components/layout/Footer.tsx
import React from 'react';
import FeaturedPhones from './FeaturedPhones';
import AppBannerMobile from './AppBannerMobile';
import PopularProducts from './PopularProducts';
import AlphabetFilter from './AlphabetFilter';
import MoreInfo from './MoreInfo/MoreInfo';

import { featuredBlocks, popularProducts, alphabet } from '@/config/footerData';

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full text-gray-700 pt-6 mt-auto">
      <AppBannerMobile />
      <div className="lg:max-w-5xl mx-auto space-y-6 px-4 lg:px-4">
        <FeaturedPhones blocks={featuredBlocks} />

        <PopularProducts products={popularProducts} />

        <AlphabetFilter letters={alphabet} />
      </div>

      <MoreInfo />
    </footer>
  );
}
