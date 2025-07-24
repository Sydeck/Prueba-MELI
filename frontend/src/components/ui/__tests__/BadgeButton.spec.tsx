import { render, screen, fireEvent } from '@testing-library/react';
import BadgeButton from '../BadgeButton';

describe('BadgeButton', () => {
  it('renders the button with label', () => {
    render(<BadgeButton label="Cart" />);
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();
  });

  it('renders the badge text when provided', () => {
    render(<BadgeButton label="Cart" badgeText="3" />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('does not render the badge if badgeText is not provided', () => {
    render(<BadgeButton label="Cart" />);
    expect(screen.queryByText('3')).not.toBeInTheDocument();
  });

  it('applies custom classes correctly', () => {
    render(
      <BadgeButton
        label="Cart"
        badgeText="5"
        visibilityClass="visible-class"
        badgeOffsetClass="offset-class"
        color="bg-red-500"
        className="custom-class"
      />
    );
    const button = screen.getByRole('button');
    const badge = screen.getByText('5');
    expect(button).toHaveClass('visible-class', 'custom-class');
    expect(badge).toHaveClass('offset-class', 'bg-red-500');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<BadgeButton label="Cart" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
