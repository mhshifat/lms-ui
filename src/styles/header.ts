import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
`;

export const Profile = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  overflow: hidden;

  & > img {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    margin-right: 1rem;
  }

  & > svg {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    &:hover {
      color: ${theme.color.primary};
    }
  }

  & > span {
    font-weight: 700;
    color: ${theme.color.secondary + "c7"};
  }
`;
