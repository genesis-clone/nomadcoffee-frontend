import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

declare module 'styled-components' {
  export interface DefaultTheme {
    fontColor: string;
    bgColor: string;
  }
}

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
      color: ${(props) => props.theme.fontColor};
      background-color: ${(props) => props.theme.bgColor};
    }
`;
