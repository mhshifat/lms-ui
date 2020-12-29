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

export const SignInAs = styled.p`
  margin: 1rem 0;
  color: ${theme.color.secondary + "c7"};
  font-weight: 500;

  & > span {
    margin: 0 0.5rem;
    color: ${theme.color.primary};
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

export const Notice = styled.p`
  text-align: center;
  width: 90%;
  margin: 4rem auto 0;
  color: ${theme.color.secondary + "c7"};
`;
