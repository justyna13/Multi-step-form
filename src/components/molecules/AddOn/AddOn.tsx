import React, { useState } from "react";
import { SingleAddOn } from "@/components/organisms/FormStepThird/FormStepThird.tsx";
import "@/components/molecules/AddOn/AddOn.scss";

interface IAddOn {
  testid: string;
  item: SingleAddOn;
  disabled: boolean;
}

export const AddOn: React.FC<IAddOn> = ({
  item,
  testid,
  disabled = false
}: IAddOn) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`add-on ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={() => setSelected(!selected)}
      data-testid={testid}>
      <div className="checkbox-wr add-on__inner">
        <input id={`add-on-${item.id}`} type="checkbox" disabled={disabled} />
        <label htmlFor={`add-on-'${item.id}`}>
          <div className="add-on__details">
            <p className="add-on__ttl">{item.name}</p>
            <p className="add-on__desc">{item.description}</p>
            <div className="add-on__price">+{item.pricePerMonth}/mo</div>
          </div>
        </label>
      </div>
    </div>
  )
}
