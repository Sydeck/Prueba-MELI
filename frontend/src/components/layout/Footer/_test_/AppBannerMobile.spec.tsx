import { render, screen } from '@testing-library/react';
import AppBannerMobile from '../AppBannerMobile';

describe('AppBannerMobile', () => {
  it('renders with default text and image', () => {
    render(<AppBannerMobile />);
    expect(screen.getByTestId('app-banner-mobile')).toBeInTheDocument();
    expect(screen.getByAltText('App')).toBeInTheDocument();
    expect(screen.getByText(/¡Compra y vende con la app!/i)).toBeInTheDocument();
  });

  it('renders with custom text and image', () => {
    render(
      <AppBannerMobile text="Descarga la app ahora" imageSrc="/custom.png" altText="Custom App" />
    );
    expect(screen.getByAltText('Custom App')).toBeInTheDocument();
    expect(screen.getByText('Descarga la app ahora')).toBeInTheDocument();
  });
});
