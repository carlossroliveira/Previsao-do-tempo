import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = <T = unknown>(endpoint: string): { data: T | null } => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fullUrl = `/api/${endpoint}`;

    setData(null);

    axios
      .get(fullUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error('Erro ao buscar dados:', err);
      });
  }, [endpoint]);

  return { data };
};
