import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: contentBus;
  margin-bottom: 5rem;
  display: grid;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};
`;

export const ParagraphSC = styled.p`
  margin: 0;
  text-align: center;
  color: tomato;
  letter-spacing: 3px;
`;

// box-shadow: 0 10px 40px tomato, 0 0 0 20px #393e46, 0 0 0 20px tomato;
