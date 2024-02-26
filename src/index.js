import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme(
  {
    config: {
      initialColorMode: "light",
      useSystemColorMode: true
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode("gray.100", "gray.800")(props),
          color: mode("gray.800", "whiteAlpha.900")(props),
        }
      })
    },
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);