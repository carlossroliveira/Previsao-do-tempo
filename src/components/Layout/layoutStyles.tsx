import styled from 'styled-components';

export const ContainerSC = styled.section`
  margin: 0 auto;
  height: 100vh;
  background-color: #393e46;
  padding: 3rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: 350px 5fr 1fr;
  grid-template-rows: 80px 1fr 1fr 100px;
  grid-template-areas:
    'header header header'
    'sidebar contentMap contentMap'
    'sidebar contentBus contentInf'
    'footer footer footer';

  background: ${(props) => props.theme.background.primary};

  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 870px) {
    font-size: 87.5%;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'header header header'
      'sidebar sidebar sidebar'
      'contentMap contentMap contentMap'
      'contentBus contentBus contentBus'
      'contentInf contentInf contentInf'
      'footer footer footer';
  }
`;
