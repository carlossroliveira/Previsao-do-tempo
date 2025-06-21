import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = <T = unknown>(endpoint: string): { data: T | null } => {
  const [data, setData] = useState<T | null>(null);

  const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  const HGBRASIL_API_BASE_URL = 'https://api.hgbrasil.com/';

  useEffect(() => {
    const fullUrl = `${CORS_PROXY_URL}${HGBRASIL_API_BASE_URL}${endpoint}`;

    axios
      .get(fullUrl)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error('Erro na requisição da API (via CORS proxy):', error);
        setData(null);
      });
  }, [endpoint]);

  return { data };
};
