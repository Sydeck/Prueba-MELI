// src/components/layout/__tests__/Logo.spec.tsx
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
  it('renders the logo with correct alt text and default src', () => {
    render(<Logo />);
    const img = screen.getByRole('img', { name: /mercado libre/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/navbar/logo-ml-large.png');
    expect(img).toHaveAttribute('alt', 'Mercado Libre');
  });

  it('contains <picture> with responsive sources', () => {
    render(<Logo />);
    const picture = screen.getByRole('img', { name: /mercado libre/i }).parentElement;
    expect(picture?.tagName.toLowerCase()).toBe('picture');

    expect(picture?.tagName.toLowerCase()).toBe('picture');

    const sources = picture?.getElementsByTagName('source');
    expect(sources?.length).toBe(2);

    expect(sources?.[0]).toHaveAttribute('media', '(max-width: 1023px)');
    expect(sources?.[0]).toHaveAttribute('srcset', '/images/navbar/logo-ml-small.png');

    expect(sources?.[1]).toHaveAttribute('media', '(min-width: 1024px)');
    expect(sources?.[1]).toHaveAttribute('srcset', '/images/navbar/logo-ml-large.png');
  });
});
