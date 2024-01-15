import { SinglePlanType } from '@/components/organisms/FormStepSecond/FormStepSecond.tsx';
import '@/components/molecules/Plan/Plan.scss';
import { AVAILABLE_PLANS, PAYMENT_PERIODS } from '@/constants';
import { useMultiStepFormContext } from '@/store';

interface IPlan {
  item: SinglePlanType;
  testid: string;
  isSelected: boolean;
  onPlanSelected: (id: AVAILABLE_PLANS) => void;
}

export const Plan: React.FC<IPlan> = ({
  item,
  testid,
  isSelected,
  onPlanSelected
}: IPlan) => {
  const { state } = useMultiStepFormContext();
  return (
    <div
      className={`single-plan ${isSelected ? 'selected' : ''}`}
      onClick={() => onPlanSelected(item.id)}
      data-testid={testid}>
      {item.icon}
      <div>
        <p className="single-plan__ttl">{item.name}</p>
        <p className="single-plan__desc">
          {state.paymentPeriod === PAYMENT_PERIODS.PER_MONTH
            ? `${item.pricePerMonth}/mo`
            : `${item.pricePerYear}/yo`}
        </p>
      </div>
    </div>
  );
};
