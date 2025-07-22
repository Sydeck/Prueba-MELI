// src/components/footer/MoreInfo.tsx
import React, { useRef, useState, useCallback } from 'react';
import clsx from 'clsx';

const columns = [
  {
    title: 'Acerca de',
    links: ['Mercado Libre', 'Investor relations', 'Tendencias', 'Sustentabilidad', 'Blog'],
  },
  {
    title: 'Otros sitios',
    links: ['Developers', 'Mercado Pago', 'Mercado Shops', 'Envíos', 'Mercado Ads'],
  },
  {
    title: 'Ayuda',
    links: ['Comprar', 'Vender', 'Resolución de problemas', 'Centro de seguridad'],
  },
  { title: 'Redes sociales', links: ['X', 'Facebook', 'YouTube'] },
  { title: 'Mi cuenta', links: ['Ingresa', 'Vender'] },
  {
    title: 'Suscripciones',
    links: ['Meli+', 'Disney+', 'HBO Max', 'Paramount+', 'ViX Premium', 'Universal+'],
  },
  { title: 'Temporadas', links: ['Buen Fin', 'Hot Sale', 'Black Friday'] },
];

const bottomLinks = [
  'Trabaja con nosotros',
  'Términos y condiciones',
  'Promociones',
  'Cómo cuidamos tu privacidad',
  'Accesibilidad',
  'Ayuda',
  'Hot Sale',
  'Programa de Afiliados',
];

export default function MoreInfo(): JSX.Element {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const panel = panelRef.current;
    if (!panel) return;

    // OPEN
    if (!open) {
      // Reset to 0 before measuring
      panel.style.maxHeight = '0px';
      panel.style.opacity = '0';

      // Force reflow before expanding
      requestAnimationFrame(() => {
        const fullHeight = panel.scrollHeight;
        panel.style.maxHeight = `${fullHeight}px`;
        panel.style.opacity = '1';
      });

      // Scroll when animation ends (listen once)
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== 'max-height') return;
        panel.removeEventListener('transitionend', onEnd);
        panel.scrollIntoView({ behavior: 'smooth', block: 'end' });
      };
      panel.addEventListener('transitionend', onEnd);
      setOpen(true);
      return;
    }

    // CLOSE
    panel.style.maxHeight = `${panel.scrollHeight}px`; // set current height
    requestAnimationFrame(() => {
      panel.style.maxHeight = '0px';
      panel.style.opacity = '0';
    });
    setOpen(false);
  };

  return (
    <section className="w-full mt-6">
      {/* Toggle pill */}
      <div className="relative flex justify-center">
        <button
          type="button"
          onClick={toggle}
          className="bg-white px-6 py-2 text-sm text-gray-700 flex items-center rounded-t-md "
          aria-expanded={open}
        >
          Más información
          <span className={clsx('transition-transform', open ? 'rotate-180' : 'rotate-0')}>▼</span>
        </button>
      </div>

      {/* Panel animado */}
      <div ref={panelRef} className={clsx('moreinfo-panel', open && 'open')}>
        <div className="transition-content">
          <div className=" bg-white w-full mx-auto px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 py-10">
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
      </div>

      {/* Bottom links (siempre visibles) */}
      <nav className=" bg-white border-t border-gray-200 text-xs h-auto pt-2 text-gray-600 flex flex-wrap justify-center gap-4">
        {bottomLinks.map(link => (
          <a key={link} href="#" className="hover:text-blue-600 transition-colors">
            {link}
          </a>
        ))}
      </nav>

      <div className="bg-white py-4">
        <p className="mx-auto max-w-[760px] px-4 text-center text-[11px] md:text-xs text-gray-600 leading-relaxed">
          Copyright © 1999-2025 El presente canal de instrucción o ambiente, es operado por
          DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Mercado
          Libre". Blvd. Miguel de Cervantes Saavedra 161, Pisos 14 y 15, Granada, Miguel Hidalgo,
          11520 Ciudad de México, CDMX, México
        </p>
      </div>
    </section>
  );
}
