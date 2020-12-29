import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { BiError } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { capFirstLetterInWord } from "../../lib";
import {
  PrimaryAction,
  PrimaryActions,
  PrimaryInput,
  PrimaryLabel,
  PrimaryWrapper,
  Wrapper,
} from "../../styles/input";
import { Props } from "../../types/input";

const Input: React.FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  variant,
  label,
  onChange: inputOnChange,
  actions,
  value: propValue,
  error: propError,
  name: propName,
  validation,
  fullWidth,
  ...restProps
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (touched) {
      setFocused(true);
      inputRef.current?.focus();
    }
  }, [touched]);

  useEffect(() => {
    if (propError?.length) {
      setError(propError);
    } else {
      setError("");
    }
  }, [propError]);

  useEffect(() => {
    if (propValue) {
      setValue(propValue.toString());
    }
  }, [propValue]);

  const primaryVariantInput = (
    <Wrapper fullWidth={!!fullWidth} focused={focused} error={!!error.length}>
      <PrimaryWrapper>
        <PrimaryLabel
          touched={touched}
          error={!!error.length}
          filled={!!value.length}
          onClick={() => {
            setTouched(true);
          }}
          style={{
            display: !label ? "none" : undefined,
          }}
        >
          {error || label}
        </PrimaryLabel>
        <PrimaryInput
          touched={!label ? true : touched}
          filled={!!value.length}
          ref={inputRef}
          type="text"
          {...restProps}
          name={propName}
          value={value}
          onChange={(e) => {
            !propError && setError("");
            setValue(e.target.value);
            inputOnChange?.(e);
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={(e) => {
            !e.target.value &&
              validation &&
              setError(
                capFirstLetterInWord(propName || "") +
                  " is not allowed to be empty"
              );
            !value.length && setTouched(false);
            setFocused(false);
          }}
        />
      </PrimaryWrapper>
      {actions && (
        <PrimaryActions show={propValue?.toString() !== value}>
          <PrimaryAction>
            <GiCheckMark />
          </PrimaryAction>
          <PrimaryAction
            onClick={() => {
              propValue && setValue(propValue.toString());
            }}
          >
            <FaTimes />
          </PrimaryAction>
        </PrimaryActions>
      )}
      {error && (
        <PrimaryActions show={!!error.length} width={3}>
          <PrimaryAction
            size="small"
            color="danger"
            onClick={() => {
              setError("");
              setTouched(true);
            }}
          >
            <BiError />
          </PrimaryAction>
        </PrimaryActions>
      )}
    </Wrapper>
  );

  switch (variant) {
    case "primary":
      return primaryVariantInput;
    default:
      return primaryVariantInput;
  }
};

Input.defaultProps = {
  type: "text",
  variant: "primary",
  spellCheck: false,
  autoFocus: false,
  validation: true,
};

export default Input;
