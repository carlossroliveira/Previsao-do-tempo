// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useCallback } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { useMyHookApplication } from '../../../../Context/contextApplication/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerPrimarySC,
  ContainerSC,
  ContainerSecondarySC,
  PrimaryFirstCubeSC,
  PrimarySecondCubeSC,
  PrimaryThirdCubeSC,
  SecondaryFirstCubeSC,
  SecondarySecondCubeSC,
} from './ContentMapStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------

export const ContentMap = (): JSX.Element => {
  const { data } = useMyHookApplication();

  const definingImages = useCallback((type: string) => {
    const Img = {
      storm: `http://assets.api.hgbrasil.com/weather/images/1.png`,
      snow: `http://assets.api.hgbrasil.com/weather/images/15.png`,
      hail: `http://assets.api.hgbrasil.com/weather/images/13.png`,
      rain: `http://assets.api.hgbrasil.com/weather/images/40n.png`,
      fog: `http://assets.api.hgbrasil.com/weather/images/20.png`,
      clear_day: `http://assets.api.hgbrasil.com/weather/images/32.png`,
      clear_night: `http://assets.api.hgbrasil.com/weather/images/31n.png`,
      cloud: `http://assets.api.hgbrasil.com/weather/images/29n.png`,
      cloudly_day: `http://assets.api.hgbrasil.com/weather/images/27.png`,
      cloudly_night: `http://assets.api.hgbrasil.com/weather/images/33n.png`,
      default: 'Ops, sem img',
    } as { [type: string]: string };

    return Img[type] || Img.default;
  }, []);

  return (
    <ContainerSC>
      <ContainerPrimarySC>
        <PrimaryFirstCubeSC>
          <h1>{data?.results.city}</h1>
          <p>{data?.results.sunrise}</p>
          <p>{data?.results.sunset}</p>
        </PrimaryFirstCubeSC>
        <PrimarySecondCubeSC>
          <img
            src={`http://assets.api.hgbrasil.com/weather/images/${data?.results.img_id}.png`}
            alt={data?.results.condition_slug}
          />
        </PrimarySecondCubeSC>
        <PrimaryThirdCubeSC>
          <h1>{data?.results.temp}°</h1>
          <p>{data?.results.description}</p>
        </PrimaryThirdCubeSC>
      </ContainerPrimarySC>

      <ContainerSecondarySC>
        {data?.results?.forecast?.slice(1, 5).map((item) => {
          return (
            <SecondaryFirstCubeSC key={item?.date}>
              <p>
                {item?.weekday} - {item?.date}
              </p>

              <SecondarySecondCubeSC>
                <img
                  src={definingImages(`${item?.condition}`)}
                  alt={item?.condition}
                />
              </SecondarySecondCubeSC>

              <p>{item?.max}° C</p>
              <p>{item?.min}° C</p>
            </SecondaryFirstCubeSC>
          );
        })}
      </ContainerSecondarySC>
    </ContainerSC>
  );
};
