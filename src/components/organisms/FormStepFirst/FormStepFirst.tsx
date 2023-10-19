import { Header } from "@/components/atoms/Header/Header.tsx";
import { FormInput } from "@/components/molecules";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/atoms/Button/Button.tsx";
import { useAppState } from "@/store/StoreProvider/StoreProvider.tsx";
import { DevTool } from "@hookform/devtools";

interface IFormStepFirst {
  testid: string;
  className?: string;
}
let renderCount = 0;

export const FormStepFirst: React.FC<IFormStepFirst> = ({testid}: IFormStepFirst) => {
  const [state, setState]: any = useAppState();
  const methods = useForm<FormValues>({ defaultValues: state});

  type FormValues = {
    name: string;
    email: string;
    phone: string;
  }

  const saveData = (data: FormValues) => {
    setState({...state, ...data})
    console.log(data, methods.formState.errors)
  }
  renderCount++
  return (
    <div className="form-step--first" data-testid={testid}>
      <Header
        testid={'form-step-first-ttl'}
        title={'Personal info'}
        description={'Please provide your name, email address, and phone number.'}
      />
      <p>{renderCount/2}</p>
      <FormProvider {...methods}>
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
        <Button
          type="submit"
          className={`btn-next`}
          buttonText="Next Step"
          onClick={methods.handleSubmit(saveData)}
        />
      </FormProvider>
      <DevTool control={methods.control} />
    </div>
  )
}
