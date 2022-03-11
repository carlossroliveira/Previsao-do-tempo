// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useMemo,
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
  const [loading, setLoading] = useState<boolean>(false);
  const [validate, setValidate] = useState<string>('');

  const { data } = useFetch<APIInformation>(
    `https://api.hgbrasil.com/weather?key=cf230e99&city_name=${cityName}`,
  );

  const onChangeInformation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setStorage(event.target.value);
      setValidate(event?.target?.value);
    },
    [],
  );

  const validateInput = useMemo(() => validate?.match(/^\d+$/), [validate]);
  const loadingFC = useCallback(() => setLoading((value) => !value), []);

  const handleButtonAction = useCallback(
    (informedValue: string) => {
      loadingFC();

      setTimeout(() => {
        setCityName(informedValue);
        loadingFC();
      }, 2000);

      setStorage('');
    },
    [loadingFC],
  );

  return (
    <Context.Provider
      value={{
        validateInput,
        data,
        storage,
        loading,
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
