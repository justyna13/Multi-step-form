import { describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { Input } from "@/components/atoms";

describe('Input', () => {
  it('should match snapshot', () => {
    const view = render(<Input name="test" />);

    expect(view).toMatchSnapshot();
  });
});
