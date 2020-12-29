import React, { ButtonHTMLAttributes } from "react";
import { ImSpinner10 } from "react-icons/im";
import { Wrapper } from "../../styles/button";
import { Props } from "../../types/button";

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  fullWidth,
  loading,
  disabled,
  children,
}) => {
  return (
    <Wrapper
      fullWidth={!!fullWidth}
      disabled={loading || disabled}
      isLoading={!!loading}
    >
      {loading && <ImSpinner10 />}
      {children}
    </Wrapper>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
