import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

interface DescriptionBlockProps {
  id?: string;
  title?: string;
  text: string;
  collapsedLinesMobile?: number;
  collapsedLinesDesktop?: number;
  className?: string;
}

export default function ProductDescription({
  id = 'product-description',
  title = 'Descripción',
  text,
  collapsedLinesMobile = 100, // px para mobile
  collapsedLinesDesktop = 150, // px para desktop
  className,
}: DescriptionBlockProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);
  const [maxHeight, setMaxHeight] = useState(collapsedLinesMobile);
  const boxRef = useRef<HTMLDivElement>(null);

  // Detectar el alto real y decidir si necesitamos "Ver más"
  const measureHeight = () => {
    if (!boxRef.current) return;
    const isDesktop = window.innerWidth >= 1024;
    const collapsedHeight = isDesktop ? collapsedLinesDesktop : collapsedLinesMobile;
    setMaxHeight(collapsedHeight);
    const fullHeight = boxRef.current.scrollHeight;
    setNeedsToggle(fullHeight > collapsedHeight);
  };

  useEffect(() => {
    measureHeight();
    window.addEventListener('resize', measureHeight);
    return () => window.removeEventListener('resize', measureHeight);
  }, [text]);

  return (
    <section id={id} className={clsx('bg-white p-4 rounded-md shadow-sm', className)}>
      <h2 className="text-base font-semibold mb-4">{title}</h2>

      <div className="relative">
        <div
          ref={boxRef}
          className={clsx(
            'text-base text-gray-800 transition-all duration-300',
            !open && 'overflow-hidden'
          )}
          style={!open ? { maxHeight: `${maxHeight}px` } : { maxHeight: 'none' }}
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }}
        />
        {!open && needsToggle && (
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {needsToggle && (
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="mt-4 text-ml-blue-main text-sm hover:underline"
        >
          {open ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </section>
  );
}
