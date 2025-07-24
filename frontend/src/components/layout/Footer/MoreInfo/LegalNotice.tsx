import React from 'react';

interface LegalNoticeProps {
  text: string;
}

export function LegalNotice({ text }: LegalNoticeProps) {
  return (
    <div className="bg-white py-4">
      <p className="mx-auto max-w-[760px] px-4 text-left lg:text-center text-[11px] md:text-xs text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
