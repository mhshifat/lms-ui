import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.form`
  width: 100%;
  height: 100%;

  & a {
    display: block;
    text-decoration: none;
    color: ${theme.color.primary};
    margin-top: 4rem;
    text-align: center;
  }
`;
