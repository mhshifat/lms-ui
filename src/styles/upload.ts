import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.label`
  width: 15rem;
  height: 15rem;
  margin: 2rem 0;
  background-color: ${theme.color.bg};
  border: 1px dashed ${theme.color.tertiary + "5c"};
  color: ${theme.color.secondary + "c7"};
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: ${theme.color.primary + "c7"};
    cursor: pointer;
  }
`;
