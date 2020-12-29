import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 0;
`;

export const Group = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 0;
  display: flex;
`;

export const GroupLabel = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 15rem;
  text-align: right;
  padding: 0 2rem;
  color: ${theme.color.secondary + "c7"};
  font-weight: 700;
`;

export const GroupItem = styled.div`
  width: 100%;
  height: 100%;
  flex: 1rem;
  padding: 0 2rem;
  color: ${theme.color.secondary + "c7"};
`;

export const GroupItemProfile = styled.div`
  width: 100%;
  height: 100%;
  flex: 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
  }
`;
