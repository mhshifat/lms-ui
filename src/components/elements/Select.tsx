import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import {
  Option,
  OptionalOption,
  Options,
  Placeholder,
  Wrapper,
} from "../../styles/select";
import { Props } from "../../types/select";

const Select: React.FC<Props & SelectHTMLAttributes<HTMLSelectElement>> = ({
  fullWidth,
  placeholder,
  options,
  onValueSelect,
  defaultValue,
  ...restProps
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (defaultValue && defaultValue.length) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Wrapper fullWidth={!!fullWidth}>
      {placeholder && (
        <Placeholder onClick={() => setShowOptions((value) => !value)}>
          {selectedOption || placeholder}{" "}
          {showOptions ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </Placeholder>
      )}
      <Options show={showOptions}>
        {!options?.length && (
          <OptionalOption>No option(s) provided</OptionalOption>
        )}
        {options?.map((opt) => (
          <Option
            key={opt.value}
            onClick={() => {
              setSelectedOption(opt.label);
              setShowOptions(false);
              onValueSelect?.(opt.value);
            }}
          >
            {opt.label}
          </Option>
        ))}
      </Options>
    </Wrapper>
  );
};

export default Select;
