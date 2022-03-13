import styled, { keyframes } from 'styled-components';

export const TextAnimation = keyframes`
  to {
      opacity: 1;
      transform: initial;
  }
`;

export const ContainerSC = styled.section`
  grid-area: contentMap;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

  padding: 1rem;
  color: ${(props) => props.theme.color.primary};

  transform: translateX(+50px);
  animation: ${TextAnimation} 0.5s linear forwards;
`;

export const ContainerPrimarySC = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  border-bottom: 2px solid gray;
`;

export const PrimaryFirstCubeSC = styled.div`
  text-align: center;
  h1 {
    font-weight: 600;
  }
`;

export const PrimarySecondCubeSC = styled.div`
  max-width: 175px;
  height: 127px;
`;

export const PrimaryThirdCubeSC = styled.div`
  text-align: center;
`;

export const ContainerSecondarySC = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  text-align: center;
`;

export const SecondaryFirstCubeSC = styled.div``;

export const SecondarySecondCubeSC = styled.div`
  width: 85px;
  height: 55px;
  img {
    width: 7rem;
  }
`;
