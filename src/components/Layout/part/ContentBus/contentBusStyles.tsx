import styled, { keyframes } from 'styled-components';

export const TextAnimation = keyframes`
  to {
      opacity: 1;
      transform: initial;
  }
`;

export const ContainerSC = styled.section`
  grid-area: contentBus;
  margin-bottom: 5rem;
  display: grid;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};

  transform: scale(0.5);
  animation: ${TextAnimation} 0.5s linear forwards;
`;

export const ParagraphSC = styled.p`
  margin: 0;
  text-align: center;
  color: tomato;
  letter-spacing: 3px;
`;
