import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  background: #fff;
  border-radius: 3px;
  padding: 2rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);

  & > h1 {
    font-size: 2.5rem;
    color: ${theme.color.secondary + "c7"};
  }
`;

export const FilterBtns = styled.div`
  display: flex;

  & a {
    text-decoration: none;
    background: ${theme.color.primary};
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 3px;
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 0.5rem;
    }

    &:hover {
      background: ${theme.color.primary + "c7"};
    }
  }
`;
