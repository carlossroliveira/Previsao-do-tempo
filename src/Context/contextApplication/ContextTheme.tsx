// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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
  const [dataInformation, setDataInformation] = useState<APIInformation | null>(
    null,
  );
  const [cityName, setCityName] = useState<string>('');
  const [storage, setStorage] = useState<string>('');

  useEffect(() => {
    (async () => {
      fetch(
        `https://api.hgbrasil.com/weather?key=cf230e99&city_name=${cityName}`,
      )
        .then((response) => response.json())
        .then((json) => setDataInformation(json));
    })();
  }, [cityName]);

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
        dataInformation,
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
