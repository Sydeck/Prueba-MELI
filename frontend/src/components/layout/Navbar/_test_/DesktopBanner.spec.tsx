// src/components/layout/__tests__/DesktopBanner.spec.tsx
import { render, screen } from '@testing-library/react';
import DesktopBanner from '../DesktopBanner';

describe('DesktopBanner', () => {
  it('renders with default image and alt text', () => {
    render(<DesktopBanner />);
    const image = screen.getByTestId('desktop-banner-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/navbar/free-shipping.png');
    expect(image).toHaveAttribute('alt', 'Promo envío gratis');
  });

  it('renders with custom image and alt text', () => {
    render(<DesktopBanner src="/custom/image.png" alt="Custom Banner" />);
    const image = screen.getByTestId('desktop-banner-image');
    expect(image).toHaveAttribute('src', '/custom/image.png');
    expect(image).toHaveAttribute('alt', 'Custom Banner');
  });
});
