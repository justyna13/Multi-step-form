import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { AddOn } from '@/components/molecules';
import { SingleAddOn } from '@/components/organisms/FormStepThird/FormStepThird.tsx';
import { MultiStepFormProvider } from '@/store';

const exampleAddOn: SingleAddOn = {
  id: 1,
  name: 'test',
  pricePerMonth: 12,
  pricePerYear: 123,
  description: 'test desc',
  fieldName: 'onlineService'
};

const meta = {
  title: 'Molecules/AddOn',
  component: AddOn,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const methods = useForm();
      return (
        <MultiStepFormProvider>
          <FormProvider {...methods}>
            <Story>
              <AddOn {...context.args} />
            </Story>
          </FormProvider>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof AddOn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAddOn: Story = {
  args: {
    testid: 'testid',
    item: exampleAddOn,
    name: 'test'
  }
};
