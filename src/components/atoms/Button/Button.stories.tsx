import { Button } from "@/components/atoms";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Button",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    buttonText: "default"
  }
}

export const PrevButton: Story = {
  args: {
    variant: "prev",
    buttonText: "Go Back"
  }
}

export const NextButton: Story = {
  args: {
    variant: "next",
    buttonText: "Next"
  }
}

export const ConfirmButton: Story = {
  args: {
    variant: "confirm",
    buttonText: "Confirm"
  }
}
