import { Header } from "@/components/atoms/Header/Header.tsx";

interface IFormStepFirst {
  testid: string;
  className?: string;
}

export const FormStepFirst: React.FC<IFormStepFirst> = ({testid}: IFormStepFirst) => {
  return (
    <div className="form-step--first" data-testid={testid}>
      <Header
        testid={'form-step-first-ttl'}
        title={'Personal info'}
        description={'Please provide your name, email address, and phone number.'}
      />


      Name e.g. Stephen King Email Address e.g. stephenking@lorem.com Phone Number e.g. +1 234 567 890 Next Step
    </div>
  )
}
