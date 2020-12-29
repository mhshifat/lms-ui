import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Main = styled.div`
  background: #eef0f4;
  min-height: calc(100vh - 6rem);
  padding: 0 2rem;
`;

export const Breadcrumb = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  color: ${theme.color.secondary + "c7"};

  & > svg {
    margin: 0 1rem;
    color: #aaa;
  }
`;
