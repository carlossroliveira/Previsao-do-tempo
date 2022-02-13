import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: footer;

  color: ${(props) => props.theme.color.primary};
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};
`;
