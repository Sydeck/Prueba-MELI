import { render, fireEvent, screen } from '@testing-library/react';
import MobileCarousel from '../ImageCarrousel';

beforeAll(() => {
  Element.prototype.scrollTo = jest.fn();
});

describe('MobileCarousel', () => {
  const images = ['/images/img1.webp', '/images/img2.webp', '/images/img3.webp'];

  it('clicking dots changes slide', () => {
    render(<MobileCarousel images={images} />);
    const dot = screen.getByTestId('dot-2'); // ahora sí existe
    fireEvent.click(dot);
    expect(Element.prototype.scrollTo).toHaveBeenCalled();
  });
});
