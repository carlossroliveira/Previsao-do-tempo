// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
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
  const { dataInformation } = useMyHookApplication();

  const definingImages = React.useCallback((type: string) => {
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

    function returnImg(value: string) {
      return Img[value] || Img.default;
    }

    return returnImg(type);
  }, []);

  return (
    <ContainerSC>
      <ContainerPrimarySC>
        <PrimaryFirstCubeSC>
          <h1>{dataInformation?.results.city}</h1>
          <p>{dataInformation?.results.sunrise}</p>
          <p>{dataInformation?.results.sunset}</p>
        </PrimaryFirstCubeSC>
        <PrimarySecondCubeSC>
          <img
            src={`http://assets.api.hgbrasil.com/weather/images/${dataInformation?.results.img_id}.png`}
            alt={dataInformation?.results.condition_slug}
          />
        </PrimarySecondCubeSC>
        <PrimaryThirdCubeSC>
          <h1>{dataInformation?.results.temp}°</h1>
          <p>{dataInformation?.results.description}</p>
        </PrimaryThirdCubeSC>
      </ContainerPrimarySC>

      <ContainerSecondarySC>
        {dataInformation?.results?.forecast?.splice(0, 4)?.map((item) => {
          return (
            <SecondaryFirstCubeSC key={item.date}>
              <p>
                {item.weekday} - {item.date}
              </p>

              <SecondarySecondCubeSC>
                <img
                  src={definingImages(`${item.condition}`)}
                  alt={item.condition}
                />
              </SecondarySecondCubeSC>

              <p>{item.max}° C</p>
              <p>{item.min}° C</p>
            </SecondaryFirstCubeSC>
          );
        })}

        {/* <input value={storage} type="text" onChange={onChangeTesting} />
        <button onClick={() => kkk(storage)}>Buscar</button> */}
      </ContainerSecondarySC>
    </ContainerSC>
  );
};
