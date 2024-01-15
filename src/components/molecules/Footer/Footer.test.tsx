import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { Footer } from '@/components/molecules';

describe('Footer', () => {
  test('should match snapshot', () => {
    const view = render(<Footer testid={'footer'} />);
    expect(view).toMatchSnapshot();
  });
});
