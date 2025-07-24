import { render, screen, fireEvent } from '@testing-library/react';
import FeaturedPhones from '../FeaturedPhones';

const blocks = [
  { title: 'Celulares', items: ['iPhone', 'Samsung'], moreLabel: 'Ver más' },
  { title: 'Accesorios', items: ['Fundas', 'Cargadores'] },
];

describe('FeaturedPhones', () => {
  it('renders the title and blocks', () => {
    render(<FeaturedPhones blocks={blocks} />);
    expect(screen.getByText(/Destacado en Celulares y Telefonía/i)).toBeInTheDocument();
    expect(screen.getByText('Celulares')).toBeInTheDocument();
    expect(screen.getByText('Accesorios')).toBeInTheDocument();
  });

  it('toggles a block when clicked', () => {
    render(<FeaturedPhones blocks={blocks} />);
    const toggle = screen.getByTestId('featured-toggle-0');
    fireEvent.click(toggle);
    expect(screen.getByTestId('featured-list-0')).toHaveClass('block');
  });
});
