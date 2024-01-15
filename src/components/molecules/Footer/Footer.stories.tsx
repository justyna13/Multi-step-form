import { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@/components/molecules';

const meta = {
  title: 'Molecules/Footer',
  component: Footer,
  tags: ['autodocs']
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {
  args: {
    testid: 'testid'
  }
};
