import { render } from '@testing-library/react';
import { describe } from 'vitest';

import { AppProvider } from '@/store';

describe('StoreProvider', () => {
  it('should match snapshot', () => {
    const view = render(<AppProvider>{null}</AppProvider>);
    expect(view).toMatchSnapshot();
  });
});
