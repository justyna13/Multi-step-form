import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormConfirmation } from '@/components/organisms';

describe('FormConfirmation', () => {
  it('should match snapshot', () => {
    const view = render(<FormConfirmation />);
    expect(view).toMatchSnapshot();
  });
});
