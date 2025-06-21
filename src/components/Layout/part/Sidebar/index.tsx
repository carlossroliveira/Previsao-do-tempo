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
  UlSC,
  DivSC,
  LiSC,
  SpanSC,
  TitleSC,
  ContainerSC,
  ParagraphSC,
  ParagraphSecondarySC,
} from './sidebarStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IGeneral } from './types';

export const Sidebar = (): JSX.Element => {
  const API_KEY: string = process.env.REACT_APP_API_KEY || '';

  const currentYear: number = new Date().getFullYear();
  const { data: dataSalvador } = useFetch<IGeneral>(
    `weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=${API_KEY}&city_name=Salvador`,
  );
  const { data: dataRioDeJaneiro } = useFetch<IGeneral>(
    `weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=${API_KEY}&city_name=Rio_De_Janeiro`,
  );

  const { data: dataBeloHorizonte } = useFetch<IGeneral>(
    `weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=${API_KEY}&city_name=Belo_Horizonte`,
  );

  const { data: dataFlorianopolis } = useFetch<IGeneral>(
    `weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=${API_KEY}&city_name=Florianopolis`,
  );
  const { data: dataFortaleza } = useFetch<IGeneral>(
    `weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=${API_KEY}&city_name=Fortaleza`,
  );
  const { data: dataBrasilia } = useFetch<IGeneral>(
    `weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=${API_KEY}&city_name=Bras%C3%ADlia`,
  );

  const { data: dataEspíritoSanto } = useFetch<IGeneral>(
    `weather?array_limit=1&fields=only_results,city_name,forecast,max,min&key=${API_KEY}&city_name=Esp%C3%ADrito_Santo`,
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
            <p>{dataSalvador?.forecast[0]?.min}°</p>
            <p>{dataSalvador?.forecast[0]?.max}°</p>
          </DivSC>
          <ParagraphSC>{dataSalvador?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataRioDeJaneiro?.forecast[0]?.min}°</p>
            <p>{dataRioDeJaneiro?.forecast[0]?.max}°</p>
          </DivSC>
          <ParagraphSC>{dataRioDeJaneiro?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataBeloHorizonte?.forecast[0]?.min}°</p>
            <p>{dataBeloHorizonte?.forecast[0]?.max}°</p>
          </DivSC>
          <ParagraphSC>{dataBeloHorizonte?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          {dataFlorianopolis &&
          dataFlorianopolis.forecast &&
          dataFlorianopolis.forecast.length > 0 ? (
            <DivSC>
              <p>{dataFlorianopolis.forecast[0].min}°</p>
              <p>{dataFlorianopolis.forecast[0].max}°</p>
            </DivSC>
          ) : (
            <p>Carregando dados do tempo...</p>
          )}

          {dataFlorianopolis && dataFlorianopolis.city_name && (
            <ParagraphSC>{dataFlorianopolis.city_name}</ParagraphSC>
          )}
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataFortaleza?.forecast[0]?.min}°</p>
            <p>{dataFortaleza?.forecast[0]?.max}°</p>
          </DivSC>
          <ParagraphSC>{dataFortaleza?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          <DivSC>
            <p>{dataBrasilia?.forecast[0]?.min}°</p>
            <p>{dataBrasilia?.forecast[0]?.max}°</p>
          </DivSC>
          <ParagraphSC>{dataBrasilia?.city_name}</ParagraphSC>
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          {dataEspíritoSanto &&
          dataEspíritoSanto.forecast &&
          dataEspíritoSanto.forecast.length > 0 ? (
            <DivSC>
              <p>{dataEspíritoSanto.forecast[0].min}°</p>
              <p>{dataEspíritoSanto.forecast[0].max}°</p>
            </DivSC>
          ) : (
            <DivSC>
              <p>Carregando dados de previsão...</p>
            </DivSC>
          )}

          {dataEspíritoSanto?.city_name && (
            <ParagraphSC>{dataEspíritoSanto.city_name}</ParagraphSC>
          )}
        </LiSC>
      </UlSC>
      <ParagraphSecondarySC>
        &copy; {currentYear} | Carlos Oliveira
      </ParagraphSecondarySC>
    </ContainerSC>
  );
};
