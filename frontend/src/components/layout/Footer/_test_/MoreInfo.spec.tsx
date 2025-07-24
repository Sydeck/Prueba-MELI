// src/components/footer/__tests__/MoreInfo.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MoreInfo from '../MoreInfo';

describe('MoreInfo', () => {
  const columns = [{ title: 'Acerca de', links: ['Mercado Libre', 'Blog'] }];
  const bottomLinks = ['Trabaja con nosotros', 'Ayuda'];
  const legalText = 'Copyright 2025';

  it('renders all sections', () => {
    render(<MoreInfo columns={columns} bottomLinks={bottomLinks} legalText={legalText} />);
    expect(screen.getByText('Acerca de')).toBeInTheDocument();
    expect(screen.getByText('Trabaja con nosotros')).toBeInTheDocument();
    expect(screen.getByText(legalText)).toBeInTheDocument();
  });

  it('toggles panel on click', () => {
    render(<MoreInfo columns={columns} bottomLinks={bottomLinks} legalText={legalText} />);
    const button = screen.getByTestId('more-info-toggle');
    const panel = screen.getByTestId('more-info-panel');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
