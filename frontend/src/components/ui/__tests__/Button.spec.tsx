import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('applies primary and secondary variant classes', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-ml-blue-main');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-[#4189E633]');
  });

  it('disables button when disabled or loading', () => {
    const { rerender } = render(<Button disabled>Disabled</Button>);
    let button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');

    rerender(<Button loading>Loading</Button>);
    button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('renders default spinner when loading + secondary', () => {
    render(<Button loading variant="secondary" />);
    expect(screen.getByRole('status', { name: /cargando/i })).toBeInTheDocument();
  });

  it('renders custom spinner if SpinnerComponent is provided', () => {
    const CustomSpinner = () => <div data-testid="spinner" />;
    render(<Button loading variant="secondary" SpinnerComponent={CustomSpinner} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('calls onClick when clicked and not disabled/loading', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled or loading', () => {
    const handleClick = jest.fn();
    const { rerender } = render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();

    rerender(
      <Button loading onClick={handleClick}>
        Loading
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
