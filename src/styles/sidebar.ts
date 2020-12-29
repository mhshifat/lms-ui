import styled from "styled-components/macro";
import { theme } from ".";
import { SidebarItemType } from "../types/sidebar";

export const Wrapper = styled.div`
  width: 24rem;
  height: 100%;
  min-height: 100vh;
  border-right: 1px solid ${theme.color.tertiary + "7a"};
`;

export const Logo = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-weight: 600;
  color: ${theme.color.secondary + "c7"};
`;

export const List = styled.ul`
  width: 100%;
  height: auto;
  color: ${theme.color.secondary + "c7"};
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const Item = styled.li<SidebarItemType>`
  display: block;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-right: 3px solid
    ${({ active }) => (active ? theme.color.primary : "fff")};
  background: ${({ active }) => (active ? theme.color.primary + "57" : "fff")};
  color: ${({ active }) =>
    active ? theme.color.primary : theme.color.secondary + "c7"};

  & span:nth-child(1) {
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  & span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;

    & a {
      text-decoration: none;
      color: inherit;
    }
  }

  &:hover {
    background: ${theme.color.primary + "57"};
    color: ${theme.color.primary};
    cursor: pointer;
  }
`;
