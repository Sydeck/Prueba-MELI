// src/components/footer/__tests__/AlphabetFilter.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import AlphabetFilter from '../AlphabetFilter';

describe('AlphabetFilter', () => {
  const letters = ['A', 'B', 'C'];

  it('renders all provided letters', () => {
    render(<AlphabetFilter letters={letters} />);
    letters.forEach(letter => {
      expect(screen.getByRole('button', { name: letter })).toBeInTheDocument();
    });
  });

  it('calls onSelect when a letter is clicked', () => {
    const handleSelect = jest.fn();
    render(<AlphabetFilter letters={letters} onSelect={handleSelect} />);
    const button = screen.getByRole('button', { name: 'B' });
    fireEvent.click(button);
    expect(handleSelect).toHaveBeenCalledWith('B');
  });

  it('has a nav with correct aria-label', () => {
    render(<AlphabetFilter letters={letters} />);
    const nav = screen.getByRole('navigation', { name: /filtrar por letra inicial/i });
    expect(nav).toBeInTheDocument();
  });
});
