import { useFormContext } from 'react-hook-form';

import { Header } from '@/components/atoms';
import { Button } from '@/components/atoms';
import { AddOn } from '@/components/molecules';
import '@/components/organisms/FormStepThird/FormStepThird.scss';
import { availableAddOns } from '@/constants/data.tsx';
import { MultiStepFormActionType, useMultiStepFormContext } from '@/store';

interface IFormStepThird {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
  onBtnPrevClicked: () => void;
}

export type SingleAddOn = {
  id: number;
  name: string;
  pricePerMonth: number;
  description: string;
  fieldName: string;
};

export const FormStepThird: React.FC<IFormStepThird> = ({
  testid,
  onBtnPrevClicked,
  onBtnNextClicked
}: IFormStepThird) => {
  const { getValues } = useFormContext();
  const { dispatch } = useMultiStepFormContext();

  const saveData = () => {
    const stepFields = getValues();
    dispatch({
      type: MultiStepFormActionType.UPDATE_STEP_ADDITIONAL,
      payload: stepFields
    });
    onBtnNextClicked();
  };

  return (
    <div className="form-step--third" data-testid={testid}>
      <Header
        testid={'multiStepForm-step-third-ttl'}
        title={'Pick add-ons'}
        description={'Add-ons help enhance your gaming experience. '}
      />

      {availableAddOns.map((item) => (
        <AddOn
          name={`addOns.${item.fieldName}`}
          testid={`add-on-${item.id}`}
          item={item}
          key={item.id}
        />
      ))}

      <div className="step-bottom">
        <Button
          type="button"
          variant="prev"
          buttonText="Go Back"
          onClick={onBtnPrevClicked}
        />
        <Button
          type="button"
          variant="next"
          buttonText="Next Step"
          onClick={saveData}
        />
      </div>
    </div>
  );
};
