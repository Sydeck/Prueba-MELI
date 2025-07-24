import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import ProductGallery from '@/components/ui/ProductGallery';
import ProductDescription from './ProductDescription';
import SpecsTable from './SpecsTable';
import ProductInfoPanel from './ProductInfoPanel/ProductInfoPanel';
import BuyBox from './BuyBox/BuyBox';
import SellerCard from './BuyBox/SellerCard';
import BreadcrumbBar from './BreadcrumbBar';

import { useQuantity } from '@/hooks/useQuantity';
import { useProductDetails } from '@/hooks/useProductDetails';

interface Props {
  productId: string;
}

export default function ProductPageShell({ productId }: Props): JSX.Element {
  const { data, isPending: loading, error } = useProductDetails(productId);
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState(0);

  useEffect(() => {
    if (data?.availability?.stock) {
      const stock = Math.min(data.availability.stock, 10);
      setQty(prev => Math.min(prev, stock));
    }
  }, [data?.availability?.stock, setQty]);

  if (loading) return <div className="p-4">Cargando producto...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {String(error)}</div>;
  if (!data?.product) return <div className="p-4">Producto no encontrado</div>;

  const product = data.product;
  const seller = data.seller;
  const shipping = data.shipping;
  const availability = data.availability;

  const maxQty = Math.min(availability.stock ?? 1, 10);

  return (
    <main className="w-full bg-ml-gray-body">
      <div className="max-w-screen-xl mx-auto lg:px-8 bg-ml-gray-body">
        {/* Breadcrumbs */}
        <div className="hidden lg:block py-3 ">
          <BreadcrumbBar
            related={['Celulares', product.title]}
            path={[
              {
                label: 'Celulares y Telefonía',
                href: 'https://www.mercadolibre.com.mx/c/celulares-y-telefonia',
              },
              {
                label: 'Celulares y Smartphones',
                href: 'https://listado.mercadolibre.com.mx/celulares-telefonia/celulares-smartphones/',
              },
              { label: product.title },
            ]}
            backHref="#"
            actions={[
              {
                label: 'Vender uno igual',
                href: 'https://www.mercadolibre.com.mx/syi/core/list/equals?itemId=MLM3605988382',
              },
              { label: 'Compartir', onClick: () => navigator.share?.({ url: location.href }) },
            ]}
          />
        </div>

        {/* Layout principal */}
        <div className="lg:grid lg:grid-cols-[850px_1fr] bg-white">
          {/* Columna izquierda */}
          <section id="left-column">
            <div className="lg:grid lg:grid-cols-[auto_340px] lg:w-full">
              {/* Galería */}

              <div id="product-gallery">
                <div className="hidden lg:block h-[480px] rounded-md shadow-sm">
                  <ProductGallery
                    images={product.variants[activeColor].images}
                    width={380}
                    height={450}
                    zoomContainerWidth={700}
                    zoomContainerHeight={700}
                    zoomScale={700}
                  />
                </div>
              </div>

              {/* Panel de info del producto */}
              <ProductInfoPanel
                brandLogo={seller.brandLogo}
                brandLinkLabel={`Visita la tienda oficial de ${seller.name}`}
                condition={product.condition}
                soldQty={seller.metrics.totalSales}
                title={product.title}
                rating={product.rating}
                reviews={product.reviews}
                oldPrice={`$ ${(product.price.amount * 1.2).toFixed(2)}`} // Precio simulado
                price={product.price.formatted}
                priceCents="00"
                discountPct={`${product.price.discount}% OFF`}
                installments="Consulta promociones"
                ivaText="IVA incluido"
                colors={product.variants}
                activeColor={activeColor}
                onColorSelect={setActiveColor}
                facts={product.facts}
              />
            </div>

            {/* Descripción y Specs */}
            <div className="hidden lg:block">
              <ProductDescription text={product.description} />
              <SpecsTable specs={product.specs} />
            </div>
          </section>

          {/* Columna derecha */}
          <aside
            id="right-column"
            className={clsx('mt-6 space-y-4', 'lg:mt-0 lg:space-y-6 lg:pl-0')}
          >
            <BuyBox
              seller={seller}
              stock={availability.stock}
              qty={qty}
              setQty={setQty}
              maxQty={maxQty}
            />
            <SellerCard
              image={seller.brandLogo}
              sellerName={seller.name}
              stock={availability.stock}
              desktopOnly
            />
          </aside>

          {/* Mobile: Descripción y Specs */}
          <div className="block lg:hidden">
            <ProductDescription text={product.description} />
            <SpecsTable specs={product.specs} />
          </div>
        </div>
      </div>
    </main>
  );
}
