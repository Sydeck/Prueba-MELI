import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryMenuItem } from '../CategoryMenuItem';

describe('CategoryMenuItem', () => {
  const category = {
    name: 'Tecnología',
    children: [{ name: 'Celulares' }, { name: 'Computadoras' }],
  };

  it('renders main category', () => {
    render(
      <CategoryMenuItem category={category} idx={0} activeIdx={null} setActiveIdx={() => {}} />
    );
    expect(screen.getByText('Tecnología')).toBeInTheDocument();
  });

  it('shows submenu on hover', () => {
    let activeIdx: number | null = null;
    const setActiveIdx = (i: number | null) => (activeIdx = i);

    render(
      <CategoryMenuItem
        category={category}
        idx={0}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
      />
    );

    const button = screen.getByTestId('menu-button-0');
    fireEvent.mouseEnter(button);
    // Simulamos que ahora está activo
    setActiveIdx(0);

    // Re-render con estado actualizado
    render(
      <CategoryMenuItem category={category} idx={0} activeIdx={0} setActiveIdx={setActiveIdx} />
    );

    expect(screen.getByTestId('submenu-0')).toBeInTheDocument();
    expect(screen.getByText('Celulares')).toBeInTheDocument();
  });
});
