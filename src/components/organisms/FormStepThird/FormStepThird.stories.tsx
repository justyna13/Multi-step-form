import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormStepThird } from '@/components/organisms';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Organisms/FormStepThird',
  component: FormStepThird,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const methods = useForm();

      return (
        <MultiStepFormProvider>
          <FormProvider {...methods}>
            <Story>
              <FormStepThird {...context.args} />
            </Story>
          </FormProvider>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormStepThird>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormStepThird: Story = {
  args: {
    testid: 'testid',
    onBtnNextClicked: () => {},
    onBtnPrevClicked: () => {}
  }
};
