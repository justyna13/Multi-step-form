import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormStepFirst } from "@/components/organisms";

describe("FormStepFirst", () => {

  it("should render firstStep", () => {
    render(
      <FormStepFirst
        testid={'form-step-first'} />
    );
    const formFirstStep = screen.getByTestId('form-step-first');
    expect(formFirstStep).toBeInTheDocument();
  })

  it("should be visible on render", () => {
    render(
      <FormStepFirst
        testid={'form-step-first'} />
    );
    const formFirstStep = screen.getByTestId('form-step-first');
    expect(formFirstStep).not.toHaveClass("hidden");
  })
})
