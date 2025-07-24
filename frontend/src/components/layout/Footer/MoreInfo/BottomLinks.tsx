import React from 'react';

interface BottomLinksProps {
  links: string[];
}

export function BottomLinks({ links }: BottomLinksProps) {
  return (
    <nav className="bg-white border-t border-gray-200 text-xs h-auto pt-2 text-gray-600 flex flex-wrap justify-center gap-4">
      {links.map(link => (
        <a key={link} href="#" className="hover:text-blue-600 transition-colors">
          {link}
        </a>
      ))}
    </nav>
  );
}
