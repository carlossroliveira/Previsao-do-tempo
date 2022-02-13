// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  TitleSC,
  DivSC,
  UlSC,
  LiSC,
  SpanSC,
  ParagraphSC,
} from './sidebarStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------

export const Sidebar = (): JSX.Element => {
  return (
    <ContainerSC>
      <TitleSC>Capitais</TitleSC>
      <DivSC>
        <p>Min</p>
        <p>Max</p>
      </DivSC>
      <UlSC>
        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>18°</p>
            <p>27°</p>
          </DivSC>
          <ParagraphSC>Salvador</ParagraphSC>
        </LiSC>
        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>18°</p>
            <p>27°</p>
          </DivSC>
          <ParagraphSC>Rio de Janeiro</ParagraphSC>
        </LiSC>
        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>18°</p>
            <p>27°</p>
          </DivSC>
          <ParagraphSC>São Paulo</ParagraphSC>
        </LiSC>
        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>18°</p>
            <p>27°</p>
          </DivSC>
          <ParagraphSC>Testando com nome grande</ParagraphSC>
        </LiSC>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
        <li>18° 27° Salvador</li>
      </UlSC>
    </ContainerSC>
  );
};
