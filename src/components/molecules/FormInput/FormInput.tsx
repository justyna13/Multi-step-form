import { Input } from "@/components/atoms";
import { useFormContext } from "react-hook-form";

type InputProps = React.ComponentProps<typeof Input>;

interface IFormInput extends InputProps {
  label: string;
}

export const FormInput: React.FC<IFormInput> = ({
  label,
  name,
  type,
  placeholder
}: IFormInput) => {
  const {
    register,
    formState: { errors}
  } = useFormContext();

  const isError = errors[name];
  const errorMsg = isError?.message as string;
  return (
    <div className="form-control">
      <label className="form-label">
        {label}
        { isError ? (
          <span>{errorMsg}</span>
        ): null}
      </label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
      />
    </div>
  )
}
