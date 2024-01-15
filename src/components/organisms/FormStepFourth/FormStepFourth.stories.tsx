import { Meta, StoryObj } from '@storybook/react';

import { FormStepFourth } from '@/components/organisms';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Organisms/FormStepFourth',
  component: FormStepFourth,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      return (
        <MultiStepFormProvider>
          <Story>
            <FormStepFourth {...context.args} />
          </Story>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormStepFourth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormStepFourth: Story = {
  args: {
    testid: 'testid'
  }
};
