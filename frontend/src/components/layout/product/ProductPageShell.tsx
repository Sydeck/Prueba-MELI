import React from 'react';
import clsx from 'clsx';

import ProductGallery from '@/components/ui/ProductGallery';
import ProductDescription from './ProductDescription';
import SpecsTable, { SpecItem } from './SpecsTable';
import ProductInfoPanel from './ProductInfoPanel/ProductInfoPanel';

import BuyBox from './BuyBox/BuyBox';
import SellerCard from './BuyBox/SellerCard';
import BreadcrumbBar from './BreadcrumbBar';
import { useQuantity } from '@/hooks/useQuantity';

const rating = 4.8;
const reviews = 36;
const descripcionHTML =
  'El Nothing Phone (3a) Pro combina un diseño transparente icónico con un cuerpo ligero y resistente, ofreciendo la nueva interfaz Glyph para notificaciones y atajos visuales sin encender la pantalla. Su construcción en vidrio y marco de aluminio aporta un tacto premium, mientras que el acabado mate minimiza huellas. En el interior, el Snapdragon 7s Gen 3 trabaja junto a 12 GB de RAM y 256 GB de almacenamiento para brindar fluidez en multitarea, juegos y apps pesadas. La pantalla AMOLED de 6,77" alcanza 120 Hz de refresco y hasta 3000 nits de brillo máximo, asegurando colores vibrantes y lectura perfecta bajo el sol. Nothing OS, basado en Android, mantiene una interfaz limpia, rápida y con funciones exclusivas para personalizar cada detalle. El sistema de cámaras incluye un triple módulo de 50 MP + 50 MP + 32 MP, con estabilización avanzada y modos nocturnos mejorados para fotos nítidas y video estable. La batería de 5000 mAh soporta carga rápida y reversible, para que compartas energía con tus accesorios. Completa el conjunto la conectividad total: 5G, NFC, Bluetooth 5.4, Wi‑Fi de última generación y sensores completos para una experiencia sin compromisos.';

const specs: SpecItem[] = [
  { label: 'Marca', value: 'Nothing' },
  { label: 'Modelo', value: 'Phone (3a) Pro' },
  { label: 'Memoria RAM', value: '12 GB' },
  { label: 'Almacenamiento', value: '256 GB' },
  { label: 'Pantalla', value: '6.77" AMOLED 120 Hz' },
  { label: 'Batería', value: '5000 mAh' },
  { label: 'Cámaras', value: '50 MP + 50 MP + 32 MP' },
];

const priceInt = '9,713';
const priceCents = '37';
const oldPrice = '14,943';
const discountPct = '35% OFF';
const installmentsText = '15 meses sin intereses de $ 647';
const ivaText = 'IVA incluido';
const stock = 8;
const maxQty = Math.min(stock, 10);

export default function ProductPageShell(): JSX.Element {
  const { qty, setQty } = useQuantity(1, maxQty);

  return (
    <main className="w-full bg-[#EDEDED]">
      <div className="max-w-screen-xl mx-auto lg:px-8 bg-[#EDEDED]">
        {/* Breadcrumbs placeholder */}
        <div className="hidden lg:block py-3 ">
          <BreadcrumbBar
            related={[
              'telefono',
              'xiaomi pocophone poco m5s dual sim 256 gb gris 8 gb ram',
              'nothing phone',
              'telefonos celulares',
            ]}
            path={[
              { label: 'Celulares y Telefonía', href: '#' },
              { label: 'Celulares y Smartphones', href: '#' },
              { label: 'Nothing Phone' },
            ]}
            backHref="#"
            actions={[
              { label: 'Vender uno igual', href: '#' },
              { label: 'Compartir', onClick: () => navigator.share?.({ url: location.href }) },
            ]}
          />
        </div>

        {/* Layout */}
        <div className="lg:grid lg:grid-cols-[850px_1fr] bg-white">
          {/* LEFT column */}
          <section id="left-column ">
            <div className="lg:grid lg:grid-cols-[auto_340px] lg:w-full">
              {/* Gallery */}
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

              {/* Product info panel */}
              <ProductInfoPanel
                brandLogo="/images/logos/nothing_tech_logo.webp"
                brandLinkLabel="Visita la tienda oficial de Nothing Tech"
                condition="Nuevo"
                soldQty={500}
                title="Nothing Phone (3a) Pro 12gb Ram 256gb Rom Teléfono 5g Smartphone Snapdragon 7s Gen 3 Octa Cpu 6.77'' Amoled Pantalla 120hz 3000 Nits Nfc Bluetooth 5.4 Color Negro"
                rating={rating}
                reviews={reviews}
                oldPrice={`$ ${oldPrice}`}
                price={`$ ${priceInt}`}
                priceCents={priceCents}
                discountPct={discountPct}
                installments={installmentsText}
                ivaText={ivaText}
                colors={[
                  { src: '/images/img1.webp', alt: 'Negro', stock: 10, price: 9713 },
                  { src: '/images/img2.webp', alt: 'Gris', stock: 10, price: 9713 },
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

            {/* Descripción y Specs */}
            <div className="hidden lg:block">
              <ProductDescription text={descripcionHTML} collapsedLines={100} />

              <SpecsTable specs={specs} />
            </div>
          </section>

          {/* RIGHT column (BuyBox + Seller desktop) */}
          <aside
            id="right-column"
            className={clsx('mt-6 space-y-4', 'lg:mt-0 lg:space-y-6 lg:pl-0')}
          >
            <BuyBox stock={stock} qty={qty} setQty={setQty} maxQty={maxQty} />

            {/* Seller desktop */}
            <SellerCard stock={stock} desktopOnly />
          </aside>

          <div className="block lg:hidden">
            <ProductDescription text={descripcionHTML} />

            <SpecsTable specs={specs} />
          </div>
        </div>
      </div>
    </main>
  );
}
