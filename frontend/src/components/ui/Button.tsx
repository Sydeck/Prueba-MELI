// src/components/ui/Button.tsx
import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  SpinnerComponent?: React.ComponentType;
}

function DefaultSpinner() {
  return (
    <div
      className="animate-spin mr-3 w-4 h-4 border-2 border-ml-blue-dark border-t-transparent rounded-full"
      role="status"
      aria-label="cargando"
    />
  );
}

export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  SpinnerComponent,
  type,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const baseClasses =
    'text-base text-semibold w-full min-h-11 max-h-full flex items-center justify-center rounded-md mx-auto';
  const variantClasses = {
    primary:
      'bg-ml-blue-main text-white hover:bg-ml-blue-dark active:bg-ml-blue-dark focus:ring-2 focus:ring-ml-blue-light focus:ring-offset-2',
    secondary:
      'bg-[#4189E633] text-ml-blue-main hover:bg-[#4189E650] active:bg-[#4189E680] focus:ring-2 focus:ring-ml-blue-light focus:ring-offset-2',
  };
  const stateClasses = isDisabled ? 'cursor-not-allowed' : '';

  return (
    <button
      type={type ?? 'button'}
      className={clsx(baseClasses, variantClasses[variant], stateClasses, className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      {...rest}
    >
      {loading &&
        variant === 'secondary' &&
        (SpinnerComponent ? <SpinnerComponent /> : <DefaultSpinner />)}
      {!loading && children}
      {loading && variant === 'primary' && children}
    </button>
  );
}
