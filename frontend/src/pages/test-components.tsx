// src/pages/test-components.tsx
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import ProductPageShell from '@/components/layout/product/ProductPageShell';
const sampleImages = ['/images/img1.webp'];
const sampleLargeImages = ['/images/img1_large.webp'];

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ProductPageShell productId="MLA987654321" />
      <Footer />
    </div>
  );
}
