import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "481px",
  lg: "1280px",
  xl: "1440px",
  "2xl": "1536px" 
})

const theme = extendTheme({
  breakpoints,
  colors: {
    primaryBrand: {
      100: "hsl(26, 100%, 55%)",
      200: "hsl(25, 100%, 94%)"
    },
    secondaryBrand: {
      varkBlue: "hsl(220, 13%, 13%)",
    
    }
  }
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
