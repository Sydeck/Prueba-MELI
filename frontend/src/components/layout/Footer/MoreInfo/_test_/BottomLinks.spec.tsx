// src/components/layout/Footer/__tests__/BottomLinks.spec.tsx
import { render, screen } from '@testing-library/react';
import { BottomLinks } from '../BottomLinks';

describe('BottomLinks', () => {
  const links = ['Ayuda', 'Términos y condiciones', 'Privacidad'];

  it('renders all provided links', () => {
    render(<BottomLinks links={links} />);
    links.forEach(link => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '#');
    });
  });

  it('applies correct styles', () => {
    render(<BottomLinks links={['Contacto']} />);
    const linkElement = screen.getByText('Contacto');
    expect(linkElement).toHaveClass('hover:text-blue-600');
  });
});
