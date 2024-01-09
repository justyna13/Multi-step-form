import React from "react";
import './ToggleSwitch.scss';

interface IToggleSwitch {
  name: string;
  onLabel?: string;
  offLabel?: string;
}

export const ToggleSwitch: React.FC<IToggleSwitch> = ({
  name,
  onLabel,
  offLabel
}: IToggleSwitch) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={name}
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-label--on">{onLabel}</span>
        <span className="toggle-switch-label--off">{offLabel}</span>
      </label>
    </div>
  )
}
