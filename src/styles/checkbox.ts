import styled from "styled-components/macro";
import { theme } from ".";
import { WrappersProps } from "../types/checkbox";

export const Wrapper = styled.label<WrappersProps>`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  margin: 1rem 0;

  & span {
    transition: background 240ms ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(2) {
      color: #fff;
      width: 1.8rem;
      height: 1.8rem;
      margin-right: 1rem;
      border: 1px solid ${theme.color.primary};
      border-radius: 3px;

      & > svg {
        width: 1.3rem;
        height: 1.3rem;
      }
    }

    &:nth-child(3) {
      color: ${({ checked }) =>
        checked ? theme.color.primary : theme.color.secondary}c7;
    }
  }

  & input:checked + span {
    background: ${theme.color.primary};
  }
`;
