import styled from 'styled-components';

export const ContainerSC = styled.div`
  display: grid;
  place-items: center;
`;
export const ButtonSC = styled.a`
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  display: inline-block;
  text-decoration: none;

  color: ${({ theme }) => theme.color.primary};
  border: ${({ theme }) => theme.color.primary} 0.125em solid;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em ${({ theme }) => theme.color.primary};
  box-shadow: inset 0 0 0.5em 0 white, 0 0 0.5em 0 white;

  &::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    filter: blur(1em);
    background-color: ${({ theme }) => theme.background.secondary};
    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.background.secondary};
    text-shadow: none;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }
`;
