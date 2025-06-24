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
import React from 'react';
import { IGeneral } from './types';
import { useFetch } from '../../../../hooks/useFetch';

export const Sidebar = (): JSX.Element => {
  const API_KEY: string = process.env.REACT_APP_API_KEY || '';

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
          {dataSalvador &&
          dataSalvador.forecast &&
          dataSalvador.forecast.length > 0 ? (
            <DivSC>
              <p>{dataSalvador.forecast[0].min}°</p>
              <p>{dataSalvador.forecast[0].max}°</p>
            </DivSC>
          ) : (
            <DivSC>
              <p>Carregando...</p>
            </DivSC>
          )}
          {dataSalvador?.city_name && (
            <ParagraphSC>{dataSalvador.city_name}</ParagraphSC>
          )}
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          {dataRioDeJaneiro &&
          dataRioDeJaneiro.forecast &&
          dataRioDeJaneiro.forecast.length > 0 ? (
            <DivSC>
              <p>{dataRioDeJaneiro.forecast[0].min}°</p>
              <p>{dataRioDeJaneiro.forecast[0].max}°</p>
            </DivSC>
          ) : (
            <DivSC>
              <p>Carregando...</p>
            </DivSC>
          )}
          {dataRioDeJaneiro?.city_name && (
            <ParagraphSC>{dataRioDeJaneiro.city_name}</ParagraphSC>
          )}
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          {dataBeloHorizonte &&
          dataBeloHorizonte.forecast &&
          dataBeloHorizonte.forecast.length > 0 ? (
            <DivSC>
              <p>{dataBeloHorizonte.forecast[0].min}°</p>
              <p>{dataBeloHorizonte.forecast[0].max}°</p>
            </DivSC>
          ) : (
            <DivSC>
              <p>Carregando...</p>
            </DivSC>
          )}
          {dataBeloHorizonte?.city_name && (
            <ParagraphSC>{dataBeloHorizonte.city_name}</ParagraphSC>
          )}
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
            <DivSC>
              <p>Carregando...</p>
            </DivSC>
          )}
          {dataFlorianopolis?.city_name && (
            <ParagraphSC>{dataFlorianopolis.city_name}</ParagraphSC>
          )}
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          {dataFortaleza &&
          dataFortaleza.forecast &&
          dataFortaleza.forecast.length > 0 ? (
            <DivSC>
              <p>{dataFortaleza.forecast[0].min}°</p>
              <p>{dataFortaleza.forecast[0].max}°</p>
            </DivSC>
          ) : (
            <DivSC>
              <p>Carregando...</p>
            </DivSC>
          )}
          {dataFortaleza?.city_name && (
            <ParagraphSC>{dataFortaleza.city_name}</ParagraphSC>
          )}
        </LiSC>

        <LiSC>
          <SpanSC></SpanSC>
          {dataBrasilia &&
          dataBrasilia.forecast &&
          dataBrasilia.forecast.length > 0 ? (
            <DivSC>
              <p>{dataBrasilia.forecast[0].min}°</p>
              <p>{dataBrasilia.forecast[0].max}°</p>
            </DivSC>
          ) : (
            <DivSC>
              <p>Carregando...</p>
            </DivSC>
          )}
          {dataBrasilia?.city_name && (
            <ParagraphSC>{dataBrasilia.city_name}</ParagraphSC>
          )}
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
              <p>Carregando...</p>
            </DivSC>
          )}
          {dataEspíritoSanto?.city_name && (
            <ParagraphSC>{dataEspíritoSanto.city_name}</ParagraphSC>
          )}
        </LiSC>
      </UlSC>

      <ParagraphSecondarySC>&copy; 2022 | Carlos Oliveira</ParagraphSecondarySC>
    </ContainerSC>
  );
};
