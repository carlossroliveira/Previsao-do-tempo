// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ChangeEvent, ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------
export interface IContextApplication {
  dataInformation: APIInformation | null;
  storage: string;
  onChangeInformation: (_: ChangeEvent<HTMLInputElement>) => void;
  handleButtonAction: (_: string) => void;
}

export interface IContextApplicationProvider {
  children: ReactNode | JSX.Element;
}
export interface APIInformation {
  results: {
    temp: number;
    condition_code: string;
    description: string;
    currently: 'noite';
    cid: '';
    city: 'Salvador, BA';
    img_id: string;
    humidity: 76;
    wind_speedy: '4.64 km/h';
    sunrise: string;
    sunset: string;
    condition_slug: string;
    city_name: 'Salvador';
    forecast: [
      {
        date: string;
        weekday: 'Dom';
        max: number;
        min: number;
        description: string;
        condition: string;
      },
    ];
  };
}
