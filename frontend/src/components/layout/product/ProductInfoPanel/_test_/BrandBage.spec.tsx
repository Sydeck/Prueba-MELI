import { render, screen, fireEvent } from '@testing-library/react';
import BrandBadge from '../BrandBadge';

describe('BrandBadge', () => {
  const logo = '/logo.png';
  const label = 'BrandName';

  it('renders with logo and label', () => {
    render(<BrandBadge logo={logo} label={label} />);
    expect(screen.getByAltText(label)).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<BrandBadge logo={logo} label={label} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: `Ver más sobre ${label}` }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('hides the badge when showBadge is false', () => {
    render(<BrandBadge logo={logo} label={label} showBadge={false} />);
    expect(screen.queryByTestId('brand-badge').querySelector('svg')).not.toBeInTheDocument();
  });
});
