import ConfirmationIcon from '@/assets/icons/icon-thank-you.svg?react';
import '@/components/organisms/FormConfirmation/FormConfirmation.style.scss';

export const FormConfirmation = () => {
  return (
    <div data-testuid="form-confirmation" className="form-confirmation">
      <ConfirmationIcon />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
