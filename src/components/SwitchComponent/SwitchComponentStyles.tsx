import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Toggle = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.background.secondary,
  offColor: theme.background.secondary,
  onHandleColor: theme.background.primary,
}))<ReactSwitchProps>``;

export const ParagraphSC = styled.p`
  margin-bottom: 3rem;
  font-weight: 600;
  font-style: italic;
`;
