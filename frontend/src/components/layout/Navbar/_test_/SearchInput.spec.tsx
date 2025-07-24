import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  it('renders input with placeholder', () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/buscar productos/i);
    expect(input).toBeInTheDocument();
  });

  it('renders search button', () => {
    render(<SearchInput />);
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
  });

  it('allows typing in the input', () => {
    render(<SearchInput />);
    const input = screen.getByPlaceholderText(/buscar productos/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Celulares' } });
    expect(input.value).toBe('Celulares');
  });
});
