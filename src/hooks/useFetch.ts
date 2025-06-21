import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = <T = unknown>(endpoint: string): { data: T | null } => {
  const [data, setData] = useState<T | null>(null);

  const API_BASE_URL: string = process.env.REACT_APP_API_BASE_URL || '';

  useEffect(() => {
    if (!API_BASE_URL) {
      console.error(
        'Erro: REACT_APP_API_BASE_URL não definida nas variáveis de ambiente!',
      );
      return;
    }

    const fullUrl = `${API_BASE_URL}${endpoint}`;

    axios
      .get(fullUrl)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error('Erro na requisição da API:', error);
        setData(null);
      });
  }, [endpoint, API_BASE_URL]);

  return { data };
};
