import { useFormContext } from 'react-hook-form';

import { Header } from '@/components/atoms';
import { Button } from '@/components/atoms';
import { FormInput } from '@/components/molecules';
import '@/components/organisms/FormStepFirst/FormStepFirst.scss';
import { MultiStepFormActionType, useMultiStepFormContext } from '@/store';

interface IFormStepFirst {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
}

export const FormStepFirst: React.FC<IFormStepFirst> = ({
  testid,
  onBtnNextClicked
}: IFormStepFirst) => {
  const { dispatch } = useMultiStepFormContext();

  const { getValues, trigger } = useFormContext();
  const { state } = useMultiStepFormContext();

  const saveData = async () => {
    const isStepValid = await trigger();
    if (!isStepValid) return;
    const stepFields = getValues();

    dispatch({
      type: MultiStepFormActionType.UPDATE_FORM_DATA,
      payload: {
        formData: {
          ...state.formData,
          name: stepFields.name,
          email: stepFields.email,
          phone: stepFields.phone
        }
      }
    });
    onBtnNextClicked();
  };

  return (
    <div className="form-step--first" data-testid={testid}>
      <Header
        testid={'multiStepForm-step-first-ttl'}
        title={'Personal info'}
        description={
          'Please provide your name, email address, and phone number.'
        }
      />

      <div>
        <FormInput
          label="Name"
          name="name"
          type="text"
          validationSchema={{
            required: 'This field is required'
          }}
          placeholder="e.g. Stephen King Email"
        />
        <FormInput
          label="Address"
          name="email"
          type="email"
          validationSchema={{
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          }}
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          validationSchema={{
            required: 'This field is required',
            pattern: {
              value: /^[0-9]{3}-?[0-9]{3}-?[0-9]{3}$/,
              message: 'Invalid phone number'
            }
          }}
          placeholder="e.g. 123-456-789"
        />
        <div className="step-bottom">
          <Button
            type="button"
            variant="next"
            buttonText="Next Step"
            onClick={saveData}
          />
        </div>
      </div>
    </div>
  );
};
