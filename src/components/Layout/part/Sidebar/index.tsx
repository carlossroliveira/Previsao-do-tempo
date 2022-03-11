// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { useFetch } from '../../../../hooks/useFetch';
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
import { IGeneral } from './types';

export const Sidebar = (): JSX.Element => {
  const { data: dataSalvador } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=b5ec0e65&city_name=Salvador',
  );
  const { data: dataRioDeJaneiro } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=b5ec0e65&city_name=Rio_De_Janeiro',
  );

  const { data: dataBeloHorizonte } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=b5ec0e65&city_name=Belo_Horizonte',
  );
  const { data: dataSaoPaulo } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=cf230e99&city_name=Sao_Paulo',
  );
  const { data: dataFlorianopolis } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=b5ec0e65&city_name=Florianopolis',
  );
  const { data: dataFortaleza } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=b5ec0e65&city_name=Fortaleza',
  );
  const { data: dataBrasilia } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=b5ec0e65&city_name=Bras%C3%ADlia',
  );

  const { data: dataEspíritoSanto } = useFetch<IGeneral>(
    'https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=b5ec0e65&city_name=Esp%C3%ADrito_Santo',
  );

  return (
    <ContainerSC>
      <TitleSC>Estados</TitleSC>
      <DivSC>
        <p>Min</p>
        <p>Max</p>
      </DivSC>

      <UlSC>
        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataSalvador?.forecast[0].min}°</p>
            <p>{dataSalvador?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataSalvador?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataRioDeJaneiro?.forecast[0].min}°</p>
            <p>{dataRioDeJaneiro?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataRioDeJaneiro?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataBeloHorizonte?.forecast[0].min}°</p>
            <p>{dataBeloHorizonte?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataBeloHorizonte?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataFlorianopolis?.forecast[0].min}°</p>
            <p>{dataFlorianopolis?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataFlorianopolis?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataFortaleza?.forecast[0].min}°</p>
            <p>{dataFortaleza?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataFortaleza?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataSaoPaulo?.forecast[0].min}°</p>
            <p>{dataSaoPaulo?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataSaoPaulo?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataBrasilia?.forecast[0].min}°</p>
            <p>{dataBrasilia?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataBrasilia?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataEspíritoSanto?.forecast[0].min}°</p>
            <p>{dataEspíritoSanto?.forecast[0].max}°</p>
          </DivSC>
          <ParagraphSC>{dataEspíritoSanto?.city_name}</ParagraphSC>
        </LiSC>
      </UlSC>
    </ContainerSC>
  );
};
