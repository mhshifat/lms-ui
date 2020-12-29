import React, { InputHTMLAttributes } from "react";
import { GoPlus } from "react-icons/go";
import { Wrapper } from "../../styles/upload";

const Upload: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...restProps
}) => {
  return (
    <Wrapper>
      <input type="file" hidden {...restProps} />
      <GoPlus />
    </Wrapper>
  );
};

export default Upload;
