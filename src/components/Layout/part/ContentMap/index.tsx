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
import { ContainerSC } from './ContentMapStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------

export const ContentMap = (): JSX.Element => {
  const { dataInformation } = useMyHookApplication();

  console.log(dataInformation);
  return (
    <ContainerSC>
      <div>
        <div>
          {dataInformation?.results.city_name}
          {/* {dataInformation?.results.sunrise}
          {dataInformation?.results.sunset} */}
        </div>
        <div>
          <img
            src={`http://assets.api.hgbrasil.com/weather/images/${dataInformation?.results.img_id}.png`}
            alt={dataInformation?.results.condition_slug}
          />
        </div>
        <div>
          {/* {dataInformation?.results.temp}°C */}
          {/* {dataInformation?.results.description} */}
        </div>
      </div>
      <div>
        {/* <div>{dataInformation?.results.forecast[0].date}</div> */}
        {/* <img
          src={`https://console.hgbrasil.com/assets/weather/${data?.results.forecast[0].condition}-65947b3f46aca643ca426b2af8891b7a5fc3d23c82e1ffc4246876dc5e785166.svg`}
        /> */}
        <div></div>
        <div></div>

        {/* <input value={storage} type="text" onChange={onChangeTesting} />
        <button onClick={() => kkk(storage)}>Buscar</button> */}
      </div>
    </ContainerSC>
  );
};
