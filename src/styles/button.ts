import styled, { css } from "styled-components/macro";
import { theme } from ".";
import { WrapperProps } from "../types/button";

export const Wrapper = styled.button<WrapperProps>`
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "10rem")};
  height: 4rem;
  margin: 1rem 0;
  background-color: ${theme.color.primary + "db"};
  border: 1px solid ${theme.color.primary};
  border-radius: 3px;
  color: #fff;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.color.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${theme.color.primary + "db"};
  }

  & > svg {
    margin-right: 1rem;

    ${({ isLoading }) =>
      isLoading &&
      css`
        animation: icon-spin 2s infinite linear;

        @keyframes icon-spin {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
          }
        }
      `}
  }
`;
