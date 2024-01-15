import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';

import { FormInput } from '@/components/molecules/FormInput/FormInput';

const meta = {
  title: 'Molecules/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => {
      const methods = useForm();

      // Triggers validation for ValidatedFormInput Story
      useEffect(() => {
        methods.setError('validated', {
          type: 'required',
          message: 'Field is required'
        });
      }, [methods]);

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormInput: Story = {
  args: {
    name: 'test',
    label: 'Label'
  }
};

export const ValidatedFormInput: Story = {
  args: {
    name: 'validated',
    label: 'Label',
    validationSchema: {
      required: 'This field is required'
    }
  }
};
