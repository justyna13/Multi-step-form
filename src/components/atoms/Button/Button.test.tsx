import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { Button } from '@/components/atoms';

const fn = vi.fn();

describe('Button', () => {
  it('should match snapshot', () => {
    const view = render(<Button buttonText="test" />);
    expect(view).toMatchSnapshot();
  });

  it('should render button', () => {
    render(<Button buttonText="button text" testid={'test-btn'} />);

    const button = screen.getByTestId('test-btn');

    expect(button).toHaveTextContent('button text');
  });

  it('should render button with custom type', () => {
    render(
      <Button buttonText="button text" testid={'test-btn'} type="submit" />
    );

    const button = screen.getByTestId('test-btn');
    expect(button).not.toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should react onClick', () => {
    render(
      <Button buttonText="button text" testid={'test-btn'} onClick={fn} />
    );

    const button = screen.getByTestId('test-btn');
    expect(fn).toBeCalledTimes(0);
    button.click();
    expect(fn).toBeCalledTimes(1);
  });

  it('should render btn with variant prev', () => {
    render(
      <Button buttonText="button text" testid={'test-btn'} variant="prev" />
    );
    const button = screen.getByTestId('test-btn');

    expect(button).toHaveClass('btn-prev');
  });

  it('should render btn with variant next', () => {
    render(
      <Button buttonText="button text" testid={'test-btn'} variant="next" />
    );
    const button = screen.getByTestId('test-btn');

    expect(button).toHaveClass('btn-next');
  });

  it('should render btn with variant confirm', () => {
    render(
      <Button buttonText="button text" testid={'test-btn'} variant="confirm" />
    );
    const button = screen.getByTestId('test-btn');

    expect(button).toHaveClass('btn-confirm');
  });
});
