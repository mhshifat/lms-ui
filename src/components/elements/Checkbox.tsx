import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Wrapper } from "../../styles/checkbox";
import { Props } from "../../types/checkbox";

const Checkbox: React.FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  onChange,
  checked: checkedProp,
  ...restProps
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checkedProp !== undefined) {
      setChecked(checkedProp);
    }
  }, [checkedProp]);

  return (
    <Wrapper checked={checked}>
      <input
        type="checkbox"
        hidden
        {...restProps}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange?.(e);
        }}
      />
      <span>{checked && <AiOutlineCheck />}</span>
      <span>{label}</span>
    </Wrapper>
  );
};

export default Checkbox;
