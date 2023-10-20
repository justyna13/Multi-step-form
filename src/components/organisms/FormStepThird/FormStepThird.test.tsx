import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormStepThird } from "@/components/organisms";

describe("FormStepThird", () => {

  it("should render thirdStep", () => {
    render(
      <FormStepThird testid={'multiStepForm-step-third'} />
    );
    const formThirdStep = screen.getByTestId('multiStepForm-step-third');
    expect(formThirdStep).toBeInTheDocument();
  })

})
