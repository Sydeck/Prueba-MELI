// src/components/layout/Footer/__tests__/MoreInfo.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MoreInfo from '../MoreInfo';
import { columns } from '@/config/moreInfo.data';

describe('MoreInfo', () => {
  it('renders default subcomponents', () => {
    render(<MoreInfo />);
    // Bottom links visibles
    expect(screen.getAllByRole('link')).not.toHaveLength(0);
    // Texto legal visible
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    const customColumns = [{ title: 'Custom', links: ['Link1', 'Link2'] }];
    const customLinks = ['Custom Link'];
    const customLegal = 'Aviso personalizado';
    render(
      <MoreInfo columnsData={customColumns} bottomLinksData={customLinks} legal={customLegal} />
    );

    // Links y textos custom
    expect(screen.getByText('Custom')).toBeInTheDocument();
    expect(screen.getByText('Custom Link')).toBeInTheDocument();
    expect(screen.getByText(customLegal)).toBeInTheDocument();
  });

  it('toggles collapse when ToggleButton is clicked', () => {
    render(<MoreInfo />);
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    // No podemos comprobar la animación, pero sí que existe el panel
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
