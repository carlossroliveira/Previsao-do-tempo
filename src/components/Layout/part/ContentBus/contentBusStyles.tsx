import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: contentBus;
  margin-bottom: 5rem;
  display: grid;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};
`;
