import React from "react";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import "@/components/atoms/Input/Input.scss";

interface IInput {
  name: string;
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  type?: React.HTMLProps<HTMLInputElement>['type'];
  placeholder?: React.HTMLProps<HTMLInputElement>['placeholder'];
  validationSchema?: RegisterOptions | undefined;
}

export const Input: React.FC<IInput> = React.memo(
  ({
     register,
     name,
     type,
     placeholder,
     validationSchema,
   }: IInput) => {
    const isFormRegistered = register ? register(name, validationSchema) : undefined;

    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...isFormRegistered}
      />
    )
  }
);
