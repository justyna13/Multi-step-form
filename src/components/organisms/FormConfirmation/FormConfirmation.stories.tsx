import { Meta, StoryObj } from '@storybook/react';

import { FormConfirmation } from '@/components/organisms';

const meta = {
  title: 'Organisms/FormConfirmation',
  component: FormConfirmation,
  tags: ['autodocs']
} satisfies Meta<typeof FormConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormConfirmation: Story = {
  args: {}
};
