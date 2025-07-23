'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Heart, Share2 } from 'lucide-react';
import clsx from 'clsx';

interface MobileCarouselProps {
  images: string[];
  fav?: boolean;
  onToggleFav?: () => void;
  onShare?: () => void;
}

export default function MobileCarousel({
  images,
  fav = false,
  onToggleFav,
  onShare,
}: MobileCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  // Detecta slide actual
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handler = () => {
      const w = el.clientWidth;
      setIndex(Math.round(el.scrollLeft / w));
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, []);

  // Drag manual con pointer events
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onDown = (e: PointerEvent) => {
      isDown.current = true;
      startX.current = e.clientX;
      startScroll.current = el.scrollLeft;
      el.style.scrollSnapType = 'none';
      el.classList.add('cursor-grabbing');
      el.classList.remove('cursor-grab');
      el.setPointerCapture(e.pointerId);
    };

    const onMove = (e: PointerEvent) => {
      if (!isDown.current) return;
      const dx = e.clientX - startX.current;
      el.scrollLeft = startScroll.current - dx;
    };

    const onUp = (e: PointerEvent) => {
      if (!isDown.current) return;
      isDown.current = false;
      el.style.scrollSnapType = 'x mandatory';
      el.classList.remove('cursor-grabbing');
      el.classList.add('cursor-grab');
      el.releasePointerCapture(e.pointerId);

      const w = el.clientWidth;
      const i = Math.round(el.scrollLeft / w);
      el.scrollTo({ left: i * w, behavior: 'smooth' });
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointerleave', onUp);
    el.addEventListener('pointercancel', onUp);

    el.classList.add('cursor-grab', 'select-none');

    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointerleave', onUp);
      el.removeEventListener('pointercancel', onUp);
    };
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * i, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-white rounded-md overflow-hidden lg:hidden">
      {/* Contador fijo */}
      <span className="pointer-events-none select-none absolute left-3 top-3 z-20 bg-gray-300 text-black text-xs px-2 py-0.5 rounded-full">
        {index + 1} / {images.length}
      </span>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar touch-pan-y scroll-smooth select-none"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="snap-center shrink-0 w-full h-[400px] flex items-center justify-center bg-white relative"
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="max-h-full max-w-full object-contain"
              draggable={false}
              onDragStart={e => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {/* Fav & Share */}
      <button
        onClick={onToggleFav}
        aria-label="Favorito"
        className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow"
      >
        <Heart
          className="w-5 h-5"
          fill={fav ? '#3483FA' : 'none'}
          stroke="#3483FA"
          strokeWidth={2}
        />
      </button>

      <button
        onClick={onShare}
        aria-label="Compartir"
        className="absolute bottom-3 right-3 bg-white/90 rounded-full p-2 shadow"
      >
        <Share2 className="w-5 h-5 text-ml-blue-main" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-3 ">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={() => goTo(i)}
            className={clsx(
              'w-2 h-2 rounded-full transition',
              i === index ? 'bg-ml-blue-main' : 'bg-gray-300'
            )}
          />
        ))}
      </div>
    </div>
  );
}
