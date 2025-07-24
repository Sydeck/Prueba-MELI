import { render, screen, fireEvent } from '@testing-library/react';
import BreadcrumbBar from '../BreadcrumbBar';

describe('BreadcrumbBar', () => {
  const mockAction = jest.fn();

  it('renders related links and breadcrumbs', () => {
    render(
      <BreadcrumbBar
        related={['Celulares', 'Xiaomi']}
        path={[
          { label: 'Inicio', href: '/' },
          { label: 'Celulares', href: '/celulares' },
          { label: 'Xiaomi' },
        ]}
        actions={[{ label: 'Compartir', onClick: mockAction }]}
      />
    );

    expect(screen.getByTestId('related-links')).toHaveTextContent('Celulares');
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('Inicio');
    expect(screen.getByTestId('breadcrumbs')).toHaveTextContent('Xiaomi');
    expect(screen.getByText('Compartir')).toBeInTheDocument();
  });

  it('calls action on click', () => {
    render(
      <BreadcrumbBar
        path={[{ label: 'Inicio' }]}
        actions={[{ label: 'Compartir', onClick: mockAction }]}
      />
    );

    fireEvent.click(screen.getByText('Compartir'));
    expect(mockAction).toHaveBeenCalled();
  });
});
