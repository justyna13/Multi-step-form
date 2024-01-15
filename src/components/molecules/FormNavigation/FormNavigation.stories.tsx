import { Meta, StoryObj } from '@storybook/react';

import { FormNavigation } from '@/components/molecules';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Molecules/FormNavigation',
  component: FormNavigation,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      return (
        <MultiStepFormProvider>
          <Story>
            <FormNavigation {...context.args} />
          </Story>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormNavigation: Story = {
  args: {
    testid: 'testid'
  }
};
