import React, { useState } from "react";
import { SingleAddOn } from "@/components/organisms/FormStepThird/FormStepThird.tsx";
import "@/components/molecules/AddOn/AddOn.scss";

interface IAddOn {
  testid: string;
  item: SingleAddOn;
}

export const AddOn: React.FC<IAddOn> = ({
  item,
  testid
}: IAddOn) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`add-on ${selected ? 'selected': ''}`}
      onClick={() => setSelected(!selected)}
      data-testid={testid}>
      <div className="add-on__inner">
        <div>
          checkbox
        </div>
        <div className="add-on__details">
          <p className="add-on__ttl">{item.name}</p>
          <p className="add-on__desc">{item.description}</p>
          <div className="add-on__price">+{item.pricePerMonth}/mo</div>
        </div>
      </div>
    </div>
  )
}
