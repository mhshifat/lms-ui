import styled from "styled-components/macro";
import { theme } from ".";
import { OptionsProps, WrapperProps } from "../types/select";

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-width: 10rem;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "40rem")};
  height: 5rem;
  margin: 2rem 0;
  display: flex;
  background-color: ${theme.color.bg};
  border: 1px solid ${theme.color.tertiary + "5c"};
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  position: relative;
  user-select: none;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-family: ${theme.fontFamily || "sans-serif"};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${theme.color.secondary + "de"};
  cursor: pointer;
`;

export const Options = styled.div<OptionsProps>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 150%;
  right: 0;
  width: 100%;
  height: auto;
  font-family: ${theme.fontFamily || "sans-serif"};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${theme.color.secondary + "de"};
  cursor: pointer;
  background: ${theme.color.bg};
  border: 1px solid ${theme.color.tertiary + "5c"};
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -1rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;
    background: ${theme.color.bg};
    border-radius: 3px;
    border: 1px solid ${theme.color.tertiary + "5c"};
    transform: rotate(48deg);
    border-right: 0;
    border-bottom: 0;
    z-index: -1;
  }
`;

export const Option = styled.div`
  padding: 0 2rem;
  height: 4rem;
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;

  &:hover {
    background: #e4e4e4;
  }
`;

export const OptionalOption = styled.div`
  padding: 0 2rem;
  height: 4rem;
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
