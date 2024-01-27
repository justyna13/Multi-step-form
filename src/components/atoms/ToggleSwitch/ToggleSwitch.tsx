import React from 'react';
import '@/components/atoms/ToggleSwitch/ToggleSwitch.style.scss';
import { useFormContext } from 'react-hook-form';

interface IToggleSwitch {
  name: string;
  onLabel?: string;
  offLabel?: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const ToggleSwitch: React.FC<IToggleSwitch> = ({
  name,
  checked,
  onLabel,
  offLabel,
  onChange
}: IToggleSwitch) => {
  const { register } = useFormContext();

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        data-testid={`checkbox-${name}`}
        id={name}
        checked={checked}
        {...register(name)}
        onChange={onChange}
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-label--on">{onLabel}</span>
        <span className="toggle-switch-label--off">{offLabel}</span>
      </label>
    </div>
  );
};
