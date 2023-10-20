import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormNavigation } from "@/components/molecules";
import { MultiStepFormProvider } from "@/store";


describe("Navigation", () => {
  it("should render 4 steps", () => {
    render(
      <MultiStepFormProvider>
        <FormNavigation testid={'form-navigation'} />
      </MultiStepFormProvider>
    )

    const firstStep = screen.getByTestId('form-step-1');
    const secondStep = screen.getByTestId('form-step-2');
    const thirdStep = screen.getByTestId('form-step-3');
    const fourthStep = screen.getByTestId('form-step-4');

    expect(firstStep).toBeInTheDocument();
    expect(secondStep).toBeInTheDocument();
    expect(thirdStep).toBeInTheDocument();
    expect(fourthStep).toBeInTheDocument();
  })
})
