import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

interface DescriptionBlockProps {
  id?: string;
  title?: string;
  text: string;
  collapsedLines?: number;
  className?: string;
}

export default function ProductDescription({
  id = 'product-description',
  title = 'Descripción',
  text,
  collapsedLines = 260,
  className,
}: DescriptionBlockProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const [needsToggle, setNeedsToggle] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    setNeedsToggle(el.scrollHeight > collapsedLines);
  }, [text, collapsedLines]);

  return (
    <section id={id} className={clsx('bg-white p-4 rounded-md shadow-sm', className)}>
      <h2 className="text-base font-semibold mb-4">{title}</h2>

      <div className="relative">
        <div
          ref={boxRef}
          className={clsx(
            'text-base text-gray-800  transition-all duration-300',
            !open && 'max-h-[var(--collapsed-height)] overflow-hidden'
          )}
          style={
            !open
              ? ({
                  ['--collapsed-height' as any]: `${collapsedLines}px lg:${collapsedLines}px`,
                } as React.CSSProperties)
              : undefined
          }
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }}
        />
        {!open && needsToggle && (
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {needsToggle && (
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="mt-4 text-ml-blue-main text-sm hover:underline"
        >
          {open ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </section>
  );
}
