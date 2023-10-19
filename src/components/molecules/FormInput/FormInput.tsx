import { Input } from "@/components/atoms";
import { RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = React.ComponentProps<typeof Input>;

interface IFormInput extends InputProps {
  label: string;
  validationSchema?: RegisterOptions | undefined;
}

export const FormInput: React.FC<IFormInput> = ({
  label,
  name,
  type,
  placeholder,
  validationSchema
}: IFormInput) => {
  const {
    register,
    formState: { errors}
  } = useFormContext();
  const isError = errors[name];

  return (
    <div className="form-control">
      <label className="form-label">
        {label}
        { isError ? (
          <span>{isError.message as string}</span>
        ): null}
      </label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        validationSchema={validationSchema}
        register={register}
      />
    </div>
  )
}
