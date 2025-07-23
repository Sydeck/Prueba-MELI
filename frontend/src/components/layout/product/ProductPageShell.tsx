// src/components/layout/ProductPageShell.tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import ProductGallery from '@/components/ui/ProductGallery';
import { BadgeCheck, Heart, Star } from 'lucide-react';
import ProductInfoPanel from './ProductInfoPanel/ProductInfoPanel';

const rating = 4.8; // número flotante 0–5
const reviews = 36; // total de reseñas
/**
 * Skeleton for the product detail page.
 * - Mobile: single column, stacked sections.
 * - ≥ lg: two columns -> left 2/3, right 1/3 of the available width.
 * Replace the TODO blocks with real components as you build them.
 */
export default function ProductPageShell(): JSX.Element {
  const [fav, setFav] = useState(false);
  return (
    <main className="w-full bg-red-500">
      <div className="max-w-screen-xl mx-auto bg-white">
        {/* 1) Breadcrumbs + actions (full width, always on top) */}
        <div className="hidden lg:block py-3 bg-green-500">
          {/* TODO: Breadcrumbs + "Volver | Vender uno igual | Compartir" */}
          <div className="text-sm text-ml-blue-main">TODO: breadcrumbs & actions</div>
        </div>

        {/* 2) Main layout: single column on mobile, 2/3 - 1/3 on lg+ */}
        <div className="lg:grid lg:grid-cols-[850px_1fr]">
          {/* LEFT COLUMN (2/3) */}
          <section id="left-column ">
            <div className="lg:grid lg:grid-cols-[auto_340px] lg:w-full">
              {/* GALERÍA */}
              <div id="product-gallery">
                <div className="hidden lg:block h-[480px] rounded-md shadow-sm">
                  <ProductGallery
                    images={['/images/img1.webp', '/images/img2.webp']}
                    width={380}
                    height={450}
                    zoomContainerWidth={700}
                    zoomContainerHeight={700}
                    zoomScale={700}
                  />
                </div>
              </div>

              {/* PANEL INFO (máx 710px alto) */}
              <ProductInfoPanel
                brandLogo="/images/logos/nothing_tech_logo.webp"
                brandLinkLabel="Visita la tienda oficial de Nothing Tech"
                condition="Nuevo"
                soldQty={500}
                title="Nothing Phone (3a) Pro 12gb Ram 256gb Rom Teléfono 5g Smartphone Snapdragon 7s Gen 3 Octa Cpu 6.77'' Amoled Pantalla 120hz 3000 Nits Nfc Bluetooth 5.4 Color Negro"
                rating={4.8}
                reviews={36}
                oldPrice="$ 14,943"
                price="$ 9,713"
                priceCents="37"
                discountPct="35% OFF"
                installments="15 meses sin intereses de $ 647"
                colors={[
                  {
                    src: '/images/img1.webp',
                    alt: 'Negro',
                    stock: 10,
                    price: 9713,
                  },
                  {
                    src: '/images/img2.webp',
                    alt: 'Gris',
                    stock: 10,
                    price: 9713,
                  },
                ]}
                facts={[
                  'Memoria RAM: 12 GB.',
                  'Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.',
                  'Pantalla AMOLED 6.77".',
                  'Cámara trasera triple de 50 MP + 50 MP + 32 MP.',
                  'Batería de 5000 mAh.',
                ]}
              />
            </div>

            {/* 2.2 Condition | sold qty | rating */}
            <div id="product-header-info" className="text-sm text-gray-500">
              {/* TODO: Nuevo | 123 vendidos | ★★★★☆ (4.8) */}
              <span>TODO: condition / sold / rating</span>
            </div>

            {/* 2.3 Title */}
            <h1 id="product-title" className="text-2xl font-semibold text-gray-900">
              {/* TODO: product title */}
              TODO: product title
            </h1>

            {/* 2.4 Short highlights / key attributes */}
            <div id="product-highlights" className="bg-white p-4 rounded-md shadow-sm">
              {/* TODO: short specs list / variations */}
              TODO: highlights
            </div>

            {/* 2.5 Description */}
            <div id="product-description" className="bg-white p-4 rounded-md shadow-sm">
              {/* TODO: long description */}
              TODO: description
            </div>

            {/* 2.6 Tech specs */}
            <div id="product-specs" className="bg-white p-4 rounded-md shadow-sm">
              {/* TODO: specs table */}
              TODO: specs
            </div>

            {/* 2.7 Questions & answers */}
            <div id="product-questions" className="bg-white p-4 rounded-md shadow-sm">
              {/* TODO: Q&A */}
              TODO: questions
            </div>

            {/* 2.8 Related products */}
            <div id="product-related" className="bg-white p-4 rounded-md shadow-sm">
              {/* TODO: related products carousel/grid */}
              TODO: related products
            </div>
          </section>

          {/* RIGHT COLUMN (1/3) */}
          <aside
            id="right-column"
            className={clsx(
              'mt-6 space-y-4',
              'lg:mt-0 lg:space-y-6 lg:pl-0' // ensure proper spacing on desktop
            )}
          >
            {/* 3.1 BuyBox (sticky in desktop) */}
            <div id="buy-box" className="lg:sticky lg:top-24">
              <div className="bg-white p-4 rounded-md shadow-md">
                {/* TODO: price, installments, primary & secondary buttons */}
                <p className="text-3xl font-medium text-gray-900 mb-3">TODO: price</p>
                <div className="space-y-2">
                  <button className="w-full h-11 bg-ml-blue-main text-white rounded-md">
                    Comprar ahora
                  </button>
                  <button className="w-full h-11 bg-[#4189E633] text-ml-blue-main rounded-md">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>

            {/* 3.2 Shipping / returns / warranty */}
            <div id="shipping-info" className="bg-white p-4 rounded-md shadow-sm">
              {/* TODO: shipping info */}
              TODO: shipping info
            </div>

            {/* 3.3 Seller info */}
            <div id="seller-info" className="bg-white p-4 rounded-md shadow-sm">
              {/* TODO: seller card */}
              TODO: seller info
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
