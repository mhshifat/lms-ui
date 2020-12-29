import styled from "styled-components/macro";
import { theme } from ".";
import {
  PrimaryActionProps,
  PrimaryActionsProps,
  PrimaryInputProps,
  PrimaryLabelProps,
  WrapperProps,
} from "../types/input";

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  min-width: 10rem;
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "40rem")};
  height: 5rem;
  margin: 2rem 0;
  display: flex;
  background-color: ${theme.color.bg};
  border: 1px solid
    ${({ focused, error }) =>
      error
        ? theme.color.error
        : focused
        ? theme.color.primary
        : theme.color.tertiary + "5c"};
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;

export const PrimaryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
  cursor: text;
  will-change: border;
  transition: border 240ms ease;
`;

export const PrimaryLabel = styled.label<PrimaryLabelProps>`
  color: ${({ error }) => (error ? theme.color.error : theme.color.tertiary)};
  display: ${({ touched, filled }) => (touched && !filled ? "none" : "flex")};
  align-items: center;
  flex: 1;
  font-family: sans-serif;
  font-size: ${({ filled }) => (filled ? 1.2 : 1.5)}rem;
  font-weight: 500;
  line-height: ${({ filled }) => (filled ? -1.5 : 1.5)};
  cursor: text;
  margin-left: ${({ filled }) => (filled ? 0.5 : 1)}rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PrimaryInput = styled.input<PrimaryInputProps>`
  border: none;
  outline: none;
  display: ${({ filled, touched }) =>
    touched ? "flex" : filled ? "flex" : "none"};
  flex: 1;
  padding-left: ${({ filled }) => (filled ? 0.5 : 1)}rem;
  font-family: ${theme.fontFamily || "sans-serif"};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.2;
  color: ${theme.color.secondary}de;
`;

export const PrimaryActions = styled.div<PrimaryActionsProps>`
  display: flex;
  align-items: center;
  width: ${({ show, width }) => (show ? width || "6rem" : 0)};
  will-change: width;
  transition: width 240ms ease;
  overflow: hidden;
`;

export const PrimaryAction = styled.div<PrimaryActionProps>`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  color: ${({ color: propColor }) =>
    propColor
      ? propColor === "danger"
        ? theme.color.error + "e0"
        : propColor
      : theme.color.primary};
  cursor: pointer;

  & svg {
    width: ${({ size }) =>
      size === "small"
        ? "2rem"
        : size === "medium"
        ? "2.5rem"
        : size === "large"
        ? "3.5rem"
        : "1.3rem"};
    height: ${({ size }) =>
      size === "small"
        ? "2rem"
        : size === "medium"
        ? "2.5rem"
        : size === "large"
        ? "3.5rem"
        : "1.3rem"};
  }
`;
