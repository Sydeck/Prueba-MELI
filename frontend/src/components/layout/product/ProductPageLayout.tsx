import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface ProductPageLayoutProps {
  /** Breadcrumbs + acciones (volver / vender uno igual / compartir) */
  breadcrumbs: ReactNode;

  /** Galería (tu ProductGallery) */
  gallery: ReactNode;

  /** Condición | vendidos | rating */
  headerInfo: ReactNode;

  /** Título del producto */
  title: ReactNode;

  /** Caja de compra (precio, cuotas, botones) */
  buyBox: ReactNode;

  /** Info de envíos / devolución / garantía */
  shippingInfo: ReactNode;

  /** Info del vendedor */
  sellerInfo: ReactNode;

  /** Variaciones, atributos clave, etc (opcional) */
  highlights?: ReactNode;

  /** Descripción larga */
  description?: ReactNode;

  /** Especificaciones técnicas */
  specs?: ReactNode;

  /** Preguntas y respuestas */
  questions?: ReactNode;

  /** Productos relacionados / recomendados */
  related?: ReactNode;

  /** Clase extra para el wrapper principal */
  className?: string;
}

/**
 * Mobile-first:
 *  - Orden vertical: breadcrumbs → gallery → headerInfo → title → buyBox → shipping/seller → description/specs → questions → related
 * Desktop ≥1024px:
 *  - Grid 12 cols:
 *     Left (lg:col-span-7): breadcrumbs (sticky arriba), gallery, headerInfo, title, highlights, description/specs/questions/related
 *     Right (lg:col-span-5): buyBox (sticky), shippingInfo, sellerInfo
 */
export default function ProductPageLayout({
  breadcrumbs,
  gallery,
  headerInfo,
  title,
  buyBox,
  shippingInfo,
  sellerInfo,
  highlights,
  description,
  specs,
  questions,
  related,
  className,
}: ProductPageLayoutProps): JSX.Element {
  return (
    <main className={clsx('w-full bg-[#EDEDED] pb-12', className)}>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        {/* Breadcrumbs (full width, first) */}
        <div className="py-3">{breadcrumbs}</div>

        {/* GRID DESKTOP */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN */}
          <section className="lg:col-span-7 space-y-6">
            {/* Gallery */}
            <div id="product-gallery">{gallery}</div>

            {/* Header info + title */}
            <div className="space-y-2" id="product-header">
              {headerInfo}
              {title}
            </div>

            {/* Highlights / short attributes */}
            {highlights && <div id="product-highlights">{highlights}</div>}

            {/* Description, Specs, Questions, Related */}
            {description && <div id="product-description">{description}</div>}
            {specs && <div id="product-specs">{specs}</div>}
            {questions && <div id="product-questions">{questions}</div>}
            {related && <div id="product-related">{related}</div>}
          </section>

          {/* RIGHT COLUMN */}
          <aside className="lg:col-span-5 mt-6 lg:mt-0 space-y-4 lg:space-y-6">
            {/* Buy Box (sticky en desktop) */}
            <div className="lg:sticky lg:top-24" id="buy-box">
              {buyBox}
            </div>

            {/* Shipping / warranty */}
            <div id="shipping-info">{shippingInfo}</div>

            {/* Seller info */}
            <div id="seller-info">{sellerInfo}</div>
          </aside>
        </div>
      </div>
    </main>
  );
}
