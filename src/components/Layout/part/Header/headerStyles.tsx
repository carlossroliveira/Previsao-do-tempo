import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: header;

  font-size: 4rem;
  margin: 0 0 0 4rem;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};

  h1 {
    margin: 0;
  }
  @media (max-width: 870px) {
    h1 {
      font-size: 60px;
    }
  }
`;
