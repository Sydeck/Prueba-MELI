import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface ProductPageLayoutProps {
  breadcrumbs: ReactNode;
  gallery: ReactNode;
  headerInfo: ReactNode;
  title: ReactNode;
  buyBox: ReactNode;
  shippingInfo: ReactNode;
  sellerInfo: ReactNode;
  highlights?: ReactNode;
  description?: ReactNode;
  specs?: ReactNode;
  questions?: ReactNode;
  related?: ReactNode;
  className?: string;
}

/**
 * Mobile-first:
 *  -  vertical: breadcrumbs → gallery → headerInfo → title → buyBox → shipping/seller → description/specs → questions → related
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
        <div className="py-3">{breadcrumbs}</div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <section className="lg:col-span-7 space-y-6">
            <div id="product-gallery">{gallery}</div>

            <div className="space-y-2" id="product-header">
              {headerInfo}
              {title}
            </div>

            {highlights && <div id="product-highlights">{highlights}</div>}

            {description && <div id="product-description">{description}</div>}
            {specs && <div id="product-specs">{specs}</div>}
            {questions && <div id="product-questions">{questions}</div>}
            {related && <div id="product-related">{related}</div>}
          </section>
          <aside className="lg:col-span-5 mt-6 lg:mt-0 space-y-4 lg:space-y-6">
            <div className="lg:sticky lg:top-24" id="buy-box">
              {buyBox}
            </div>
            <div id="shipping-info">{shippingInfo}</div>

            <div id="seller-info">{sellerInfo}</div>
          </aside>
        </div>
      </div>
    </main>
  );
}
