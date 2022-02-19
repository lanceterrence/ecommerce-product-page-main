import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Global, css } from "@emotion/react"
import "focus-visible/dist/focus-visible"

const GlobalStyle = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
}
`

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "481px",
  lg: "1280px",
  xl: "1440px",
  "2xl": "1536px" 
})

const theme = extendTheme({
  breakpoints,
  fonts: {
    body: "Kumbh Sans"
  },
  colors: {
    customPrimary: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)"
    },
    customSecondary: {
      varkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      grayishBlue: "hsl(220, 14%, 75%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)"
    }
  }
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Global styles={GlobalStyle} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
