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
    city: string;
    img_id: string;
    sunrise: string;
    sunset: string;
    condition_slug: string;
    city_name: string;
    forecast: [
      {
        date: string;
        weekday: string;
        max: number;
        min: number;
        description: string;
        condition: string;
      },
    ];
  };
}
