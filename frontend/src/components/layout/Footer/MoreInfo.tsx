// src/components/footer/MoreInfo.tsx
import React, { useRef, useState } from 'react';
import clsx from 'clsx';

export interface InfoColumn {
  title: string;
  links: string[];
}

interface MoreInfoProps {
  columns: InfoColumn[];
  bottomLinks: string[];
  legalText: string;
}

export default function MoreInfo({ columns, bottomLinks, legalText }: MoreInfoProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const panel = panelRef.current;
    if (!panel) return;

    if (!open) {
      panel.style.maxHeight = '0px';
      panel.style.opacity = '0';

      requestAnimationFrame(() => {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        panel.style.opacity = '1';
      });

      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== 'max-height') return;
        panel.removeEventListener('transitionend', onEnd);
        panel.scrollIntoView({ behavior: 'smooth', block: 'end' });
      };
      panel.addEventListener('transitionend', onEnd);
      setOpen(true);
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      requestAnimationFrame(() => {
        panel.style.maxHeight = '0px';
        panel.style.opacity = '0';
      });
      setOpen(false);
    }
  };

  return (
    <section className="w-full mt-6" data-testid="more-info-section">
      {/* Toggle pill */}
      <div className="relative flex justify-center">
        <button
          type="button"
          onClick={toggle}
          className="bg-white px-6 py-2 text-sm text-gray-700 flex items-center rounded-t-md"
          aria-expanded={open}
          aria-controls="more-info-panel"
          data-testid="more-info-toggle"
        >
          Más información
          <span className={clsx('transition-transform ml-1', open ? 'rotate-180' : 'rotate-0')}>
            ▼
          </span>
        </button>
      </div>

      {/* Panel animado */}
      <div
        id="more-info-panel"
        ref={panelRef}
        className={clsx(
          'moreinfo-panel overflow-hidden transition-all duration-300',
          open && 'open'
        )}
        data-testid="more-info-panel"
      >
        <div className="bg-white w-full mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 py-10">
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-800 mb-3">{col.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {col.links.map(link => (
                  <li key={link} className="hover:text-ml-blue-dark cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom links */}
      <nav className="bg-white border-t border-gray-200 text-xs h-auto pt-2 text-gray-600 flex flex-wrap justify-center gap-4">
        {bottomLinks.map(link => (
          <a key={link} href="#" className="hover:text-blue-600 transition-colors">
            {link}
          </a>
        ))}
      </nav>

      {/* Legal text */}
      <div className="bg-white py-4">
        <p className="mx-auto max-w-[760px] px-4 text-center text-[11px] md:text-xs text-gray-600 leading-relaxed">
          {legalText}
        </p>
      </div>
    </section>
  );
}
