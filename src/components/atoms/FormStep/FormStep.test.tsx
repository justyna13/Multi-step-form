import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStep } from '@/components/atoms';

describe('FormStep', () => {
  it('should match snapshot', () => {
    const view = render(
      <FormStep
        testid={'testid'}
        isActive={false}
        label={'test'}
        number={'1'}
      />
    );
    expect(view).toMatchSnapshot();
  });

  it('should be active when prop isActive=true', () => {
    render(
      <FormStep testid={'testid'} isActive={true} label={'test'} number={'1'} />
    );

    const step = screen.getByTestId('testid');
    expect(step).toBeInTheDocument();
    expect(step).toHaveClass('active');
  });

  it('should render number', () => {
    render(
      <FormStep testid={'testid'} isActive={true} label={'test'} number={'1'} />
    );

    const step = screen.getByTestId('testid');
    expect(step).toHaveTextContent('1');
    expect(step).toHaveTextContent('Step 1');
  });

  it('should render label', () => {
    render(
      <FormStep testid={'testid'} isActive={true} label={'test'} number={'1'} />
    );

    const step = screen.getByTestId('testid');
    expect(step).toHaveTextContent('test');
  })
});
