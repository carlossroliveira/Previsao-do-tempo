import styled, { keyframes } from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: header;
  margin: 0 0 0 4rem;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const TextAnimation = keyframes`
  to {
      opacity: 1;
      transform: initial;
  }
`;

export const TitleSC = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};

  font-size: 4rem;
  margin: 0;
  opacity: 0;
  transform: translateY(-50px);
  animation: ${TextAnimation} 0.5s linear forwards;

  @media (max-width: 870px) {
    font-size: 8vw;
  }
  @media (max-width: 500px) {
    text-align: center;
    font-size: 10vw;
  }
`;
