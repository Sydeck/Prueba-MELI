// src/components/layout/Footer/__tests__/ToggleButton.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleButton } from '../ToggleButton';

describe('ToggleButton', () => {
  it('renders button with text', () => {
    render(<ToggleButton open={false} onClick={() => {}} />);
    const button = screen.getByRole('button', { name: /más información/i });
    expect(button).toBeInTheDocument();
  });

  it('sets aria-expanded correctly', () => {
    const { rerender } = render(<ToggleButton open={false} onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    rerender(<ToggleButton open={true} onClick={() => {}} />);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<ToggleButton open={false} onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
