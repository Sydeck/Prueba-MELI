import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import ImageCarousel from '@/components/ui/ImageCarrousel';
import BrandBadge from './BrandBadge';
import ConditionSoldFav from './ConditionSoldFav';
import RatingStars from './RatingStars';
import PricesBlock from './PricesBlock';
import ColorCardsMobile from './ColorCardsMobile';
import ColorThumbsDesktop from './ColorThumbsDesktop';
import FactsBlock from './FactsBlock';

import { ProductVariant } from '@/types/product.types';

export interface ProductInfoPanelProps {
  brandLogo: string;
  brandLinkLabel: string;
  condition: string;
  soldQty: number | string;
  title: string;
  rating: number;
  reviews: number;
  oldPrice?: string;
  price: string;
  priceCents?: string;
  discountPct?: string;
  installments?: string;
  ivaText?: string;
  colors?: ProductVariant[];
  facts: string[];
  specsAnchorId?: string;
  onShare?: () => void;
  className?: string;
  activeColor: number; // manejado por el padre
  onColorSelect: (index: number) => void; // manejado por el padre
}

export default function ProductInfoPanel({
  brandLogo,
  brandLinkLabel,
  condition,
  soldQty,
  title,
  rating,
  reviews,
  oldPrice,
  price,
  priceCents,
  discountPct,
  installments,
  ivaText = 'IVA incluido',
  colors = [],
  facts,
  specsAnchorId = 'product-specs',
  onShare,
  className,
  activeColor,
  onColorSelect,
}: ProductInfoPanelProps) {
  const [fav, setFav] = useState(false);
  const toggleFav = useCallback(() => setFav(v => !v), []);
  const goToSpecs = useCallback(
    () => document.getElementById(specsAnchorId)?.scrollIntoView({ behavior: 'smooth' }),
    [specsAnchorId]
  );

  return (
    <div className={clsx('pl-4 pt-4 lg:space-y-2 lg:pl-0', className)}>
      <BrandBadge logo={brandLogo} label={brandLinkLabel} />
      <ConditionSoldFav
        condition={condition}
        soldQty={soldQty}
        fav={fav}
        onToggleFav={toggleFav}
        className="hidden lg:flex mt-0 mb-0"
      />

      <div className="flex items-center justify-between lg:hidden mt-4 mb-2">
        <ConditionSoldFav
          condition={condition}
          soldQty={soldQty}
          fav={fav}
          onToggleFav={toggleFav}
          hideHeart
          className="flex-1 mr-2"
        />
        <RatingStars value={rating} reviews={reviews} size="sm" className="flex-shrink-0 mr-4" />
      </div>
      {/* Título */}
      <h1
        className="
          text-[#000000E6] text-[16px] leading-[26px] font-normal break-words text-pretty
          lg:text-[22px] lg:leading-[26px] lg:font-semibold
        "
      >
        {title}
      </h1>
      {/* Carrusel + colores (mobile) */}
      <div className="lg:hidden space-y-2 mb-8">
        <ImageCarousel
          images={colors.length > 0 ? [colors[activeColor]?.image] : []}
          fav={fav}
          onToggleFav={toggleFav}
          onShare={onShare ?? (() => navigator.share?.({ url: window.location.href }))}
        />

        {colors.length > 0 && (
          <ColorCardsMobile colors={colors} activeColor={activeColor} onSelect={onColorSelect} />
        )}
      </div>
      {/* Rating desktop */}
      <RatingStars value={rating} reviews={reviews} size="md" className="hidden lg:flex" />
      {/* Precios */}
      <PricesBlock
        oldPrice={oldPrice}
        price={price}
        priceCents={priceCents}
        discountPct={discountPct}
        installments={installments}
        ivaText={ivaText}
      />
      {/* Colores desktop */}
      <ColorThumbsDesktop colors={colors} activeColor={activeColor} onSelect={onColorSelect} />
      {/* Facts + ver características (desktop) */}
      <FactsBlock facts={facts} onGoToSpecs={goToSpecs} />
    </div>
  );
}
