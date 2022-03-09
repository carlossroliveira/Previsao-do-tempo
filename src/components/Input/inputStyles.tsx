import styled from 'styled-components';

export const ContainerSC = styled.div`
  display: flex;
  align-items: center;

  border-radius: 20px;
  transform: scale(0.5);
  -ms-transform: scale(0.5);
  -webkit-transform: scale(0.5);
  background-color: ${({ theme }) => theme.background.secondary};
  box-shadow: 0 10px 40px ${({ theme }) => theme.color.primary},
    0 0 0 20px ${({ theme }) => theme.color.secondary},
    0 0 0 20px ${({ theme }) => theme.color.primary};

  &:hover {
    box-shadow: 0 10px 40px ${({ theme }) => theme.color.secondary},
      0 0 0 20px ${({ theme }) => theme.color.primary},
      0 0 0 20px ${({ theme }) => theme.color.primary};
  }
`;

export const InputSC = styled.input`
  text-indent: 4rem;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.secondary};

  width: 100%;
  height: 96px;
  font-size: 60px;
  line-height: 1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
