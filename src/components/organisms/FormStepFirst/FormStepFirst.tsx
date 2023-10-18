import { Header } from "@/components/atoms/Header/Header.tsx";
import { FormInput } from "@/components/molecules";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/atoms/Button/Button.tsx";

interface IFormStepFirst {
  testid: string;
  className?: string;
}

export const FormStepFirst: React.FC<IFormStepFirst> = ({testid}: IFormStepFirst) => {
  const methods = useForm();

  const handleNextStepBtnClicked = () => {
    console.log('click')
  }
  return (
    <div className="form-step--first" data-testid={testid}>
      <Header
        testid={'form-step-first-ttl'}
        title={'Personal info'}
        description={'Please provide your name, email address, and phone number.'}
      />
      <FormProvider {...methods}>
        <FormInput
          label="Name"
          name="name"
          type="text"
          placeholder="e.g. Stephen King Email"
        />
        <FormInput
          label="Address"
          name="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </FormProvider>
      <Button
        type="button"
        buttonText="Next Step"
        onClick={handleNextStepBtnClicked}
      />
    </div>
  )
}
