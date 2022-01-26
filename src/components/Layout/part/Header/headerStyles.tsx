import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: header;

  font-family: 'Arima Madurai', cursive;
  font-family: 'Roboto', sans-serif;

  font-size: 4rem;
  margin: 0 0 0 4rem;

  color: ${(props) => props.theme.colors.primary};

  h1 {
    margin: 0;
  }
`;
