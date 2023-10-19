import { Header } from "@/components/atoms/Header/Header.tsx";
import { FormInput } from "@/components/molecules";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/atoms/Button/Button.tsx";
import { useAppState } from "@/store/StoreProvider/StoreProvider.tsx";
import "@/components/organisms/FormStepFirst/FormStepFirst.scss";

interface IFormStepFirst {
  testid: string;
  className?: string;
}

export const FormStepFirst: React.FC<IFormStepFirst> = ({testid}: IFormStepFirst) => {
  const [state, setState]: any = useAppState();
  const {
    handleSubmit
  } = useFormContext();

  // type FormValues = {
  //   name: string;
  //   email: string;
  //   phone: string;
  // }

  const saveData = (data: any) => {
    setState({...state, ...data})
    console.log(data)
  }

  return (
    <div className="form-step--first" data-testid={testid}>
      <Header
        testid={'form-step-first-ttl'}
        title={'Personal info'}
        description={'Please provide your name, email address, and phone number.'}
      />

      <div>
        <FormInput
          label="Name"
          name="name"
          type="text"
          validationSchema={{
            required: "This field is required"
          }}
          placeholder="e.g. Stephen King Email"
        />
        <FormInput
          label="Address"
          name="email"
          type="email"
          validationSchema={{
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          }}
          placeholder="e.g. stephenking@lorem.com"
        />
        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          validationSchema={{
            required: "This field is required",
            pattern: {
              value: /^[0-9]{3}-?[0-9]{3}-?[0-9]{3}$/,
              message: "Invalid phone number"
            }
          }}
          placeholder="e.g. 123-456-789"
        />
        <div className="step-bottom">
          <Button
            type="button"
            className={`btn-next`}
            buttonText="Next Step"
            onClick={handleSubmit(saveData)}
          />
        </div>
      </div>

    </div>
  )
}
