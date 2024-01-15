import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { Layout } from '@/pages';

describe('Layout', () => {
  it('should match snapshot', () => {
    const view = render(<Layout testid={'layout'} />);

    expect(view).toMatchSnapshot();
  });

  it('should render footer', () => {
    render(<Layout testid={'layout'} />);

    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
  });
});
