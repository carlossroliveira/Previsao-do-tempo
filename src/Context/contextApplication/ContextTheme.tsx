// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useFetch } from '../../hooks/useFetch';
// -------------------------------------------------
// Types
// -------------------------------------------------
import {
  APIInformation,
  IContextApplication,
  IContextApplicationProvider,
} from './types';

const Context = createContext({} as IContextApplication);

export const ThemeProviderApplication = ({
  children,
}: IContextApplicationProvider): JSX.Element => {
  const [cityName, setCityName] = useState<string>('');
  const [storage, setStorage] = useState<string>('');

  const { data } = useFetch<APIInformation>(
    `https://api.hgbrasil.com/weather?key=cf230e99&city_name=${cityName}`,
  );

  const onChangeInformation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStorage(event.target.value);
    },
    [],
  );

  const handleButtonAction = useCallback((informedValue: string) => {
    setCityName(informedValue);
    setStorage('');
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        storage,
        onChangeInformation,
        handleButtonAction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyHookApplication = (): IContextApplication =>
  useContext(Context);
