// src/components/ui/BadgeButton.tsx
import React from 'react';
import clsx from 'clsx';

export interface BadgeButtonProps {
  label: string;
  badgeText?: string;
  visibilityClass?: string;
  badgeOffsetClass?: string;
  className?: string;
  color?: string;
  onClick?: () => void;
}

export default function BadgeButton({
  label,
  badgeText,
  visibilityClass = 'hidden xl:inline-block',
  badgeOffsetClass = '-top-2 left-3',
  color = 'bg-ml-blue-main',
  className,
  onClick,
}: BadgeButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('relative px-2 hover:text-ml-blue-dark', visibilityClass, className)}
    >
      <span>{label}</span>
      {badgeText && (
        <span
          className={clsx(
            'absolute border-solid text-white text-[8px] font-bold leading-none uppercase px-1  rounded-full',
            badgeOffsetClass,
            color
          )}
        >
          {badgeText}
        </span>
      )}
    </button>
  );
}
