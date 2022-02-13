import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: contentBus;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};
  border: 3px solid violet;
`;
