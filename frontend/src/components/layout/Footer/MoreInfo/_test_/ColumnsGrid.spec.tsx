// src/components/layout/Footer/__tests__/ColumnsGrid.spec.tsx
import { render, screen } from '@testing-library/react';
import { ColumnsGrid } from '../ColumnsGrid';
import { InfoColumn } from '@/types/footer.data';

describe('ColumnsGrid', () => {
  const columns: InfoColumn[] = [
    { title: 'Soporte', links: ['Ayuda', 'Contacto'] },
    { title: 'Empresa', links: ['Nosotros', 'Carreras'] },
  ];

  it('renders column titles and links', () => {
    render(<ColumnsGrid columns={columns} />);
    columns.forEach(col => {
      expect(screen.getByText(col.title)).toBeInTheDocument();
      col.links.forEach(link => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });
  });

  it('renders the correct number of columns', () => {
    render(<ColumnsGrid columns={columns} />);
    const columnTitles = screen.getAllByRole('heading', { level: 4 });
    expect(columnTitles).toHaveLength(columns.length);
  });

  it('applies center alignment on mobile when centerOnMobile is true', () => {
    render(<ColumnsGrid columns={columns} centerOnMobile />);
    const grid = screen.getByText(columns[0].title).closest('div');
    expect(grid).toHaveClass('text-center');
  });

  it('applies left alignment when centerOnMobile is false', () => {
    render(<ColumnsGrid columns={columns} centerOnMobile={false} />);
    const grid = screen.getByText(columns[0].title).closest('div');
    expect(grid).toHaveClass('text-left');
  });
});
