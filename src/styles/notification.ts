import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  min-width: auto;
  max-width: 35rem;
  padding: 2rem;
`;

export const Message = styled.div<{ type: "success" | "error" }>`
  background: #fff;
  border-radius: 3px;
  padding: 0.5rem 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.25);
  color: ${theme.color.secondary};
  border-left: 3px solid
    ${({ type }) =>
      type === "success" ? theme.color.success : theme.color.error};
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  backdrop-filter: drop-shadow(4px 4px 10px blue);
  padding-right: 1.5rem;
  animation: fromRight 240ms linear;

  @keyframes fromRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  & > svg {
    margin: 1rem;
    min-width: 2rem;
    min-height: 2rem;
    color: ${({ type }) =>
      type === "success" ? theme.color.success : theme.color.error};
  }

  & > span {
    & span {
      font-size: 1.2rem;
      color: ${({ type }) =>
        type === "success" ? theme.color.success : theme.color.error};
    }
  }
`;
