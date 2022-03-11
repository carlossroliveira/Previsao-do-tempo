import styled from 'styled-components';

export const ContainerSC = styled.section`
  grid-area: sidebar;

  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily.fontDefault};
`;

export const TitleSC = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0 3rem 0;
`;

export const DivSC = styled.div`
  display: flex;
  margin-left: 44px;
  p + p {
    margin-left: 1rem;
  }
  p {
    margin: 0;
  }
`;

export const ParagraphSC = styled.p`
  width: 130px;
  margin-left: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UlSC = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  height: calc(100vh - 495px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.background.secondary};
  }

  ::-webkit-scrollbar-track {
    border: 1px solid ${(props) => props.theme.color.primary};
    border-radius: 3px;
  }
`;

export const LiSC = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 5px;

  margin: 10px 1rem;
  padding: 5px;

  cursor: pointer;
  transition: all 0.2s;

  ${DivSC} {
    margin-left: 0;
  }

  &:hover {
    opacity: 0.7;
    font-weight: 600;
    transform: translateX(10px);
    ${ParagraphSC} {
      overflow: visible;
      white-space: normal;
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 870px) {
    justify-content: start;
    padding-left: 30px;
  }
`;

export const SpanSC = styled.span`
  position: absolute;
  left: 0;
  width: 10px;
  height: 60%;
  border-radius: 1px;
  background-color: ${(props) => props.theme.background.secondary};
`;

export const ParagraphSecondarySC = styled.p`
  text-align: center;
  margin: 40px 0;
  font-size: 20px;
`;
