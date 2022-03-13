import styled, { keyframes } from 'styled-components';

export const TextAnimation = keyframes`
  to {
      opacity: 1;
      transform: initial;
  }
`;

export const ContainerSC = styled.section`
  grid-area: footer;

  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fontFamily.fontDefault};

  margin: 0 auto;
  width: 100%;

  transform: translateY(+50px);
  animation: ${TextAnimation} 0.5s linear forwards;
`;

export const SubContainerSC = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow.primary};

  margin: 0 auto;
  max-width: 70rem;

  div {
    button {
      display: none !important;
    }
  }
`;

export const DivSC = styled.div``;

export const ImgSC = styled.img`
  margin: 0 auto;
`;
