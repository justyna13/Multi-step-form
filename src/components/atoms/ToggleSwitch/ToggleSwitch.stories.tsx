import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { ToggleSwitch } from '@/components/atoms';

const meta = {
  title: 'Atoms/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story>
            <ToggleSwitch {...context.args} />
          </Story>
        </FormProvider>
      );
    }
  ]
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultToggleSwitch: Story = {
  args: {
    name: 'testName',
    checked: false
  }
};

export const ToggleSwitchWithLabels: Story = {
  args: {
    name: 'testName',
    checked: false,
    onLabel: 'ON',
    offLabel: 'OFF'
  }
};
