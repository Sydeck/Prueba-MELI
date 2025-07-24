// src/components/layout/Footer/__tests__/LegalNotice.spec.tsx
import { render, screen } from '@testing-library/react';
import { LegalNotice } from '../LegalNotice';

describe('LegalNotice', () => {
  it('renders the provided legal text', () => {
    const text = 'Todos los derechos reservados © 2025';
    render(<LegalNotice text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    const text = 'Aviso legal';
    render(<LegalNotice text={text} />);
    const paragraph = screen.getByText(text);
    expect(paragraph).toHaveClass(
      'mx-auto',
      'max-w-[760px]',
      'text-left',
      'lg:text-center',
      'text-[11px]',
      'md:text-xs',
      'text-gray-600'
    );
  });
});
