import { Meta, StoryObj } from '@storybook/react';

import { FormStep } from '@/components/atoms';

const meta = {
  title: 'Atoms/FormStep',
  component: FormStep,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      return (
        <div
          style={{
            height: '100px',
            zoom: 0.7,
            background: '#adaeb5'
          }}>
          <Story>
            <FormStep {...context.args} />
          </Story>
        </div>
      );
    }
  ]
} satisfies Meta<typeof FormStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormStep: Story = {
  args: {
    testid: 'testid',
    isActive: false,
    label: 'Test Label',
    number: '1'
  }
};

export const ActiveFormStep: Story = {
  args: {
    testid: 'testid',
    isActive: true,
    label: 'Test Label',
    number: '1'
  }
};
