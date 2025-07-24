import { render, screen, fireEvent } from '@testing-library/react';
import ColorCardsMobile from '../ColorCardsMobile';

const colors = [
  { id: '1', color: 'Rojo', image: '/rojo.jpg', price: 500, stock: 5 },
  { id: '2', color: 'Azul', image: '/azul.jpg', price: 600, stock: 0 },
];

describe('ColorCardsMobile', () => {
  it('renders color options', () => {
    render(<ColorCardsMobile colors={colors} activeColor={0} onSelect={() => {}} />);
    expect(screen.getAllByText('Rojo').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Azul').length).toBeGreaterThan(0);
  });

  it('calls onSelect when clicking a color', () => {
    const handleSelect = jest.fn();
    render(<ColorCardsMobile colors={colors} activeColor={0} onSelect={handleSelect} />);
    fireEvent.click(screen.getByTestId('color-option-1'));
    expect(handleSelect).toHaveBeenCalledWith(1);
  });

  it('marks the active color with aria-pressed', () => {
    render(<ColorCardsMobile colors={colors} activeColor={0} onSelect={() => {}} />);
    expect(screen.getByTestId('color-option-0')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('color-option-1')).toHaveAttribute('aria-pressed', 'false');
  });
});
