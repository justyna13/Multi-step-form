import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/atoms';
import '@/components/molecules/AddOn/AddOn.scss';
import { SingleAddOn } from '@/components/organisms/FormStepThird/FormStepThird.tsx';
import { PAYMENT_PERIODS } from '@/constants';
import { useMultiStepFormContext } from '@/store';

type InputProps = React.ComponentProps<typeof Input>;

interface IAddOn extends InputProps {
  testid: string;
  item: SingleAddOn;
  disabled?: boolean;
}

export const AddOn: React.FC<IAddOn> = ({
  name,
  item,
  testid,
  disabled
}: IAddOn) => {
  const { state } = useMultiStepFormContext();
  const { register, setValue, getValues, watch } = useFormContext();
  const isSelected = watch(name) ?? false;

  const handleClick = () => {
    const valueToBeSet = !getValues(name);
    setValue(name, valueToBeSet);
  };
  return (
    <div
      className={`add-on ${isSelected ? 'selected' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={handleClick}
      data-testid={testid}>
      <div className="checkbox-wr add-on__inner">
        <Input
          name={name}
          id={`add-on-${item.id}`}
          type="checkbox"
          disabled={disabled}
          register={register}
        />
        <label htmlFor={`add-on-'${item.id}`}>
          <div className="add-on__details">
            <div>
              <p className="add-on__ttl">{item.name}</p>
              <p className="add-on__desc">{item.description}</p>
            </div>
            <div className="add-on__price">
              {state.paymentPeriod === PAYMENT_PERIODS.PER_MONTH
                ? `+${item.pricePerMonth}/mo`
                : `+${item.pricePerYear}/yo`}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
