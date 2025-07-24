import React from 'react';
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

export default function ProductPageShell({ productId }: { productId: string }): JSX.Element {
  const { product, loading, error } = useProductDetails(productId);

  if (loading) return <div className="p-4">Cargando producto...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!product) return <div className="p-4">Producto no encontrado</div>;

  const prod = product.product;
  const seller = product.seller;
  const maxQty = Math.min(product.availability.stock, 10);
  const { qty, setQty } = useQuantity(1, maxQty);

  return (
    <main className="w-full bg-[#EDEDED]">
      <div className="max-w-screen-xl mx-auto lg:px-8 bg-[#EDEDED]">
        {/* Breadcrumbs */}
        <div className="hidden lg:block py-3">
          <BreadcrumbBar
            related={['Celulares', prod.title]}
            path={[
              { label: 'Celulares y Telefonía', href: '#' },
              { label: 'Celulares y Smartphones', href: '#' },
              { label: prod.title },
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
                    images={prod.images}
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
                brandLogo={seller.brandLogo}
                brandLinkLabel={`Visita la tienda oficial de ${seller.name}`}
                condition={prod.condition}
                soldQty={seller.metrics.totalSales}
                title={prod.title}
                rating={prod.rating}
                reviews={prod.reviews}
                oldPrice={`$ ${(prod.price.amount * 1.2).toFixed(2)}`} // Simulamos precio anterior
                price={prod.price.formatted}
                priceCents="00"
                discountPct={`${prod.price.discount}% OFF`}
                installments="Consulta promociones"
                ivaText="IVA incluido"
                colors={prod.variants.map(v => ({
                  src: v.image,
                  alt: `${v.color} ${v.storage}`,
                  stock: v.stock,
                  price: v.price,
                }))}
                facts={prod.facts}
              />
            </div>

            {/* Descripción y Specs */}
            <div className="hidden lg:block">
              <ProductDescription text={prod.description} collapsedLines={100} />
              <SpecsTable specs={prod.specs} />
            </div>
          </section>

          {/* RIGHT column (BuyBox + Seller desktop) */}
          <aside
            id="right-column"
            className={clsx('mt-6 space-y-4', 'lg:mt-0 lg:space-y-6 lg:pl-0')}
          >
            <BuyBox stock={product.availability.stock} qty={qty} setQty={setQty} maxQty={maxQty} />
            <SellerCard stock={product.availability.stock} desktopOnly />
          </aside>

          <div className="block lg:hidden">
            <ProductDescription text={prod.description} />
            <SpecsTable specs={prod.specs} />
          </div>
        </div>
      </div>
    </main>
  );
}
