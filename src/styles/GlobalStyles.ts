import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* { 
  box-sizing: border-box;
}

body {
  font: 400 1rem "Inter", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
}

::-webkit-scrollbar {
  width: 12px
}
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 50px;
  border: 1px solid black;
}
::-webkit-scrollbar-button {
  background: black;
}
`;
