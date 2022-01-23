import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* { 
  box-sizing: border-box;
}
@media (max-width: 1080px) {
  html {
    box-sizing: 93.75%;
  }
}
@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}

body {
  font: 400 1rem "Inter", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  border: 3px solid tomato;  /* REMOVER ESTA LINHA */
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
