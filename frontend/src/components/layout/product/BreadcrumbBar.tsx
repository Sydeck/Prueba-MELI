import React from 'react';
import { ChevronRight, Share2 } from 'lucide-react';
import clsx from 'clsx';

export interface Crumb {
  label: string;
  href?: string;
}

export interface ActionLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbBarProps {
  related?: string[]; // “teléfono - xiaomi…”
  path: Crumb[]; // ruta principal
  backHref?: string; // “Volver”
  actions?: ActionLink[]; // “Vender uno igual”, “Compartir”
  className?: string;
}

export default function BreadcrumbBar({
  related = [],
  path,
  backHref = '#',
  actions = [],
  className,
}: BreadcrumbBarProps) {
  return (
    <section className={clsx('hidden lg:block text-gray-800 bg-[#EDEDED]', className)}>
      {/* --- También puede interesarte --- */}
      {related.length > 0 && (
        <p className="mb-2">
          <span className="font-semibold">También puede interesarte:</span>{' '}
          {related.map((r, i) => (
            <React.Fragment key={r}>
              <a href="#" className="hover:text-ml-blue-main hover:underline">
                {r}
              </a>
              {i < related.length - 1 && ' - '}
            </React.Fragment>
          ))}
        </p>
      )}

      {/* --- Línea principal: volver + breadcrumbs + acciones --- */}
      <div className="flex items-center justify-between">
        {/* Izquierda: Volver + breadcrumbs */}
        <div className="flex items-center flex-wrap gap-2 text-ml-blue-main">
          <a href={backHref} className="hover:underline">
            Volver
          </a>

          <span className="text-gray-400">|</span>

          {path.map((c, idx) => (
            <React.Fragment key={c.label}>
              {idx > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
              {c.href ? (
                <a href={c.href} className="hover:underline">
                  {c.label}
                </a>
              ) : (
                <span className="text-gray-500">{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Derecha: acciones */}
        <div className="flex items-center gap-4 text-ml-blue-main">
          {actions.map(a => (
            <button
              key={a.label}
              onClick={a.onClick}
              className="hover:underline"
              {...((a.href ? { as: 'a', href: a.href } : {}) as any)}
            >
              {a.label === 'Compartir'}
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
