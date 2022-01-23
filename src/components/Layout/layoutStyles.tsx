import styled from 'styled-components';

export const ContainerSC = styled.section`
  margin: 0 auto;
  display: grid;
  gap: 0.3rem;
  padding: 5rem;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'header header'
    'contentOne contentTwo'
    'footer footer';
`;
