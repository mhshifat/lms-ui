import { createGlobalStyle } from "styled-components";

export const theme = {
  fontFamily: "'Roboto', sans-serif;",
  color: {
    primary: "#2D7FFB",
    secondary: "#132230",
    tertiary: "#B4B6B9",
    success: "#2CCC89",
    error: "#F42E2E",
    bg: "#FCFCFC",
  },
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;
