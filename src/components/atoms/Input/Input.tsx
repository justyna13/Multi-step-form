import React from "react";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  name: string;
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  type?: React.HTMLProps<HTMLInputElement>['type'];
  placeholder?: React.HTMLProps<HTMLInputElement>['placeholder'];
}

export const Input: React.FC<IInput> = React.memo(
  ({
     register,
     name,
     type,
     placeholder
   }: IInput) => {
    const isFormRegistered = register ? register(name) : undefined;

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
