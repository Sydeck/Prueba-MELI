import { render, screen, fireEvent } from '@testing-library/react';
import QuantityDropdown from '../QuantityDropdown';

describe('QuantityDropdown', () => {
  it('renders default qty', () => {
    render(<QuantityDropdown qty={1} setQty={() => {}} stock={5} maxQty={5} />);
    expect(screen.getByTestId('qty-toggle')).toHaveTextContent('Cantidad: 1');
  });

  it('opens options and selects a new qty', () => {
    const setQty = jest.fn();
    render(<QuantityDropdown qty={1} setQty={setQty} stock={5} maxQty={5} />);
    fireEvent.click(screen.getByTestId('qty-toggle'));
    fireEvent.click(screen.getByTestId('qty-option-3'));
    expect(setQty).toHaveBeenCalledWith(3);
  });
});
