import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormStepFourth } from "@/components/organisms";

describe("FormStepFourth", () => {

  it("should render fourthStep", () => {
    render(
      <FormStepFourth testid={'form-step-fourth'} />
    );
    const formFourthStep = screen.getByTestId('form-step-fourth');
    expect(formFourthStep).toBeInTheDocument();
  })
})
