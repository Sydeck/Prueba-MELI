import { render, screen } from '@testing-library/react';
import DeliveryInfo from '../DeliveryInfo';

describe('DeliveryInfo', () => {
  it('renders delivery information with default values', () => {
    render(<DeliveryInfo stock={10} />);
    expect(screen.getByText(/Llega gratis mañana/i)).toBeInTheDocument();
    expect(screen.getByText(/20 h 52 min/i)).toBeInTheDocument();
    expect(screen.getByText(/Retira gratis a partir de mañana/i)).toBeInTheDocument();
  });

  it('renders dynamic times when passed as props', () => {
    render(<DeliveryInfo stock={5} fastDeliveryTime="10 h" pickupTime="8 h" />);
    expect(screen.getByText(/10 h/i)).toBeInTheDocument();
    expect(screen.getByText(/8 h/i)).toBeInTheDocument();
  });

  it('has accessible buttons', () => {
    render(<DeliveryInfo stock={1} />);
    expect(screen.getByRole('button', { name: /más formas de entrega/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver mapa/i })).toBeInTheDocument();
  });
});
