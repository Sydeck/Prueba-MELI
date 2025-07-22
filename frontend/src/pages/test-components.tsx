// src/pages/test-components.tsx
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

const sampleImages = ['/images/img1.webp'];
const sampleLargeImages = ['/images/img1_large.webp'];

export default function TestPage() {
  const [primaryLoading, setPrimaryLoading] = useState(false);
  const [secondaryLoading, setSecondaryLoading] = useState(false);

  const handlePrimaryClick = () => {
    setPrimaryLoading(true);
    setTimeout(() => {
      setPrimaryLoading(false);
      alert('¡Compra exitosa!');
    }, 3000);
  };

  const handleSecondaryClick = () => {
    setSecondaryLoading(true);
    setTimeout(() => {
      setSecondaryLoading(false);
      alert('¡Agregado al carrito!');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1"></main>
      <Footer />
    </div>
  );
}
