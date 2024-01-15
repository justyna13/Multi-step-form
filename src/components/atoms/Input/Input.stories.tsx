import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/atoms';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    name: 'name'
  }
};
