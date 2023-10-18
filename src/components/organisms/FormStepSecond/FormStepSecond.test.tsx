import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormStepSecond } from "@/components/organisms";

describe("FormStepSecond", () => {
  it("should render secondStep", () => {
    render(
      <FormStepSecond
        testid={'form-step-second'}
      />
    );
    const formSecondStep = screen.getByTestId('form-step-second');
    expect(formSecondStep).toBeInTheDocument();
  })
})
