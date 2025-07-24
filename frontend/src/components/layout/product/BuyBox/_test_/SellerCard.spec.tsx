import { render, screen } from '@testing-library/react';
import SellerCard from '../SellerCard';

describe('SellerCard', () => {
  it('renders seller info correctly', () => {
    render(<SellerCard image="/logo.png" sellerName="Mercado Tech" stock={120} />);
    expect(screen.getByTestId('seller-card')).toBeInTheDocument();
    expect(screen.getByText(/Mercado Tech/i)).toBeInTheDocument();
    expect(screen.getByText(/\+120 vendidos/i)).toBeInTheDocument();
  });
});
