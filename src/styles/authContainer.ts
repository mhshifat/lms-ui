import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Banner = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.div`
  flex-basis: 50rem;
  background: #fff;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${theme.color.secondary}c7;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 3rem;
  }
`;
