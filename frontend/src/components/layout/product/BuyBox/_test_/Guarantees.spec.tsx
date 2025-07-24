import { render, screen } from '@testing-library/react';
import Guarantees from '../Guarantees';

describe('Guarantees', () => {
  it('renders default guarantees', () => {
    render(<Guarantees />);
    expect(screen.getByText(/Devolución gratis/i)).toBeInTheDocument();
    expect(screen.getByText(/Compra Protegida/i)).toBeInTheDocument();
  });

  it('renders custom guarantees', () => {
    const items = [
      { icon: <div>ICON</div>, title: 'Garantía especial', description: 'Solo para ti.' },
    ];
    render(<Guarantees items={items} />);
    expect(screen.getByText(/Garantía especial/i)).toBeInTheDocument();
    expect(screen.getByText(/Solo para ti/i)).toBeInTheDocument();
  });
});
