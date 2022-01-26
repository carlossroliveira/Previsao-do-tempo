import styled from 'styled-components';

export const ContainerSC = styled.section`
  margin: 0 auto;
  padding: 5rem;
  height: 100vh;

  display: grid;
  gap: 2rem;
  grid-template-columns: 350px 1fr 1fr;
  grid-template-rows: 80px 1fr 1fr 100px;
  grid-template-areas:
    'header header header'
    'sidebar contentMap contentMap'
    'sidebar contentBus contentInf'
    'footer footer footer';

  background: rgb(7, 34, 39);
  background: linear-gradient(
    22deg,
    rgba(7, 34, 39, 1) 20%,
    rgba(53, 133, 139, 1) 50%
  );

  @media (max-width: 1080px) {
    font-size: 93.75%;
    /* background-color: tomato; */
  }

  @media (max-width: 870px) {
    font-size: 87.5%;
    /* background-color: purple; */
    grid-template-areas:
      'header header header'
      'sidebar sidebar sidebar'
      'contentMap contentMap contentMap'
      'contentBus contentBus contentBus'
      'contentInf contentInf contentInf'
      'footer footer footer';
  }
`;
