import { Button } from "@/components/atoms/Button/Button.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrevButton: Story = {
  args: {
    className: "btn-prev",
    buttonText: "Go Back"
  }
}

export const NextButton: Story = {
  args: {
    className: "btn-next",
    buttonText: "Next"
  }
}

export const ConfirmButton: Story = {
  args: {
    className: "btn-confirm",
    buttonText: "Confirm"
  }
}
