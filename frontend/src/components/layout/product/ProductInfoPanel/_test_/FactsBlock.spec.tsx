import { render, screen, fireEvent } from '@testing-library/react';
import FactsBlock from '../FactsBlock';

describe('FactsBlock', () => {
  it('renders facts list', () => {
    const facts = ['Pantalla 6.5"', 'Batería 5000mAh'];
    render(<FactsBlock facts={facts} onGoToSpecs={jest.fn()} />);
    const list = screen.getByTestId('facts-list');
    expect(list).toBeInTheDocument();
    expect(screen.getByText('Pantalla 6.5"')).toBeInTheDocument();
    expect(screen.getByText('Batería 5000mAh')).toBeInTheDocument();
  });

  it('renders fallback when facts is empty', () => {
    render(<FactsBlock facts={[]} onGoToSpecs={jest.fn()} />);
    expect(screen.getByText('Sin información disponible')).toBeInTheDocument();
  });

  it('calls onGoToSpecs when button is clicked', () => {
    const handleClick = jest.fn();
    render(<FactsBlock facts={['X']} onGoToSpecs={handleClick} />);
    fireEvent.click(screen.getByTestId('go-to-specs-btn'));
    expect(handleClick).toHaveBeenCalled();
  });
});
