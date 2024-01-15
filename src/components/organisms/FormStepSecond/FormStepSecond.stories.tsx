import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormStepSecond } from '@/components/organisms';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Organisms/FormStepSecond',
  component: FormStepSecond,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const methods = useForm();

      return (
        <MultiStepFormProvider>
          <FormProvider {...methods}>
            <Story>
              <FormStepSecond {...context.args} />
            </Story>
          </FormProvider>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormStepSecond>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormStepSecond: Story = {
  args: {
    testid: 'testid',
    onBtnNextClicked: () => {},
    onBtnPrevClicked: () => {}
  }
};
