import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: contentInf;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};
  border: 2px solid tomato;
`;
