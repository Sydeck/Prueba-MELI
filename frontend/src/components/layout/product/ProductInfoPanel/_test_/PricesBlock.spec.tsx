import { render, screen } from '@testing-library/react';
import PricesBlock from '../PricesBlock';

describe('PricesBlock', () => {
  it('renders all price info correctly', () => {
    render(
      <PricesBlock
        oldPrice="$2000"
        price="$1500"
        priceCents="99"
        discountPct="25% OFF"
        installments="12x $125"
        ivaText="IVA incluido"
      />
    );

    expect(screen.getByTestId('old-price')).toHaveTextContent('$2000');
    expect(screen.getByTestId('current-price')).toHaveTextContent('$1500');
    expect(screen.getByTestId('discount')).toHaveTextContent('25% OFF');
    expect(screen.getByTestId('installments')).toHaveTextContent('12x $125');
    expect(screen.getByTestId('iva-text')).toHaveTextContent('IVA incluido');
    expect(screen.getByTestId('payment-methods-btn')).toBeInTheDocument();
  });

  it('handles missing optional props gracefully', () => {
    render(<PricesBlock price="$1000" />);
    expect(screen.getByTestId('current-price')).toHaveTextContent('$1000');
    expect(screen.queryByTestId('old-price')).toBeNull();
    expect(screen.queryByTestId('discount')).toBeNull();
  });
});
