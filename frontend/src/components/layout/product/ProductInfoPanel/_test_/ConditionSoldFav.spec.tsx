import { render, screen, fireEvent } from '@testing-library/react';
import ConditionSoldFav from '../ConditionSoldFav';

it('renders condition and sold quantity', () => {
  render(<ConditionSoldFav condition="Nuevo" soldQty={123} fav={false} onToggleFav={jest.fn()} />);
  expect(screen.getByText('Nuevo')).toBeInTheDocument();
  expect(screen.getByText('+123 vendidos')).toBeInTheDocument();
});

it('calls onToggleFav when heart button is clicked', () => {
  const handleToggle = jest.fn();
  render(<ConditionSoldFav condition="Nuevo" soldQty={0} fav={false} onToggleFav={handleToggle} />);
  const button = screen.getByTestId('fav-button');
  fireEvent.click(button);
  expect(handleToggle).toHaveBeenCalled();
});

it('does not render heart when hideHeart is true', () => {
  render(
    <ConditionSoldFav condition="Nuevo" soldQty={0} fav={false} onToggleFav={jest.fn()} hideHeart />
  );
  expect(screen.queryByTestId('fav-button')).not.toBeInTheDocument();
});
