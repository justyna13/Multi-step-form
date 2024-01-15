import { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as ArcadePlanIcon } from '@/assets/icons/icon-arcade.svg';
import { Plan } from '@/components/molecules';
import { AVAILABLE_PLANS } from '@/constants';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Molecules/Plan',
  component: Plan,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      return (
        <MultiStepFormProvider>
          <Story>
            <Plan {...context.args} />
          </Story>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof Plan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultPlan: Story = {
  args: {
    testid: 'test',
    item: {
      id: AVAILABLE_PLANS.ARCADE,
      name: 'Arcade',
      pricePerMonth: 9,
      pricePerYear: 52,
      icon: <ArcadePlanIcon />
    },
    isSelected: false
  }
};
