import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: header;

  font-size: 4rem;
  margin: 0 0 0 4rem;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const TitleSC = styled.h1`
  margin: 0;

  @media (max-width: 870px) {
    font-size: 8vw;
  }
  @media (max-width: 500px) {
    text-align: center;
    font-size: 10vw;
  }
`;
