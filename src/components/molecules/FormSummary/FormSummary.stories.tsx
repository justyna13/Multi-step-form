import { Meta, StoryObj } from '@storybook/react';

import { FormSummary } from '@/components/molecules';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Molecules/FormSummary',
  component: FormSummary,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      return (
        <MultiStepFormProvider>
          <Story>
            <FormSummary {...context.args} />
          </Story>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormSummary: Story = {};
