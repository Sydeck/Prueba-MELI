import { render, screen, fireEvent } from '@testing-library/react';
import ColorThumbsDesktop from '../ColorThumbsDesktop';

const colors = [
  {
    id: '1',
    color: 'Negro',
    image: '/negro.jpg',
    price: { amount: 100, currency: 'MXN', discount: 0, formatted: '$100' },
    stock: 5,
  },
  {
    id: '2',
    color: 'Blanco',
    image: '/blanco.jpg',
    price: { amount: 100, currency: 'MXN', discount: 0, formatted: '$100' },
    stock: 3,
  },
];

it('renders color options and calls onSelect when clicked', () => {
  const onSelect = jest.fn();
  render(<ColorThumbsDesktop colors={colors} activeColor={0} onSelect={onSelect} />);

  const negroBtn = screen.getByTestId('desktop-color-0');
  const blancoBtn = screen.getByTestId('desktop-color-1');

  expect(negroBtn).toBeInTheDocument();
  expect(blancoBtn).toBeInTheDocument();

  fireEvent.click(blancoBtn);
  expect(onSelect).toHaveBeenCalledWith(1);
});
