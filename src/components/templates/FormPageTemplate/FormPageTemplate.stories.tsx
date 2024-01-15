import { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormPageTemplate } from '@/components/templates';
import { MultiStepFormProvider } from '@/store';

const meta = {
  title: 'Templates/FormPageTemplate',
  component: FormPageTemplate,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const methods = useForm();

      return (
        <MultiStepFormProvider>
          <FormProvider {...methods}>
            <Story>
              <FormPageTemplate {...context.args} />
            </Story>
          </FormProvider>
        </MultiStepFormProvider>
      );
    }
  ]
} satisfies Meta<typeof FormPageTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormPageTemplate: Story = {
  args: {
    testid: 'testid'
  }
};
