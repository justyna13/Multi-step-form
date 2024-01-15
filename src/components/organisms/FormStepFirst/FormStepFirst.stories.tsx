import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormStepFirst } from '@/components/organisms';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Organisms/FormStepFirst',
  component: FormStepFirst,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const methods = useForm();

      return (
        <MultiStepFormProvider>
          <FormProvider {...methods}>
            <Story>
              <FormStepFirst {...context.args} />
            </Story>
          </FormProvider>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormStepFirst>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormStepFirst: Story = {
  args: {
    testid: 'testid',
    onBtnNextClicked: () => {}
  }
};
