// seu-projeto/hooks/useFetch.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = <T = unknown>(endpoint: string): { data: T | null } => {
  const [data, setData] = useState<T | null>(null);
  // Você pode adicionar estados de loading e error se quiser para melhor UX
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<any>(null);

  // A URL base agora é o caminho para sua própria Serverless Function no Vercel
  // Ex: '/api/weather'
  const PROXY_URL = '/api/weather';

  useEffect(() => {
    // 1. Constrói a URL para a sua Serverless Function.
    // O 'endpoint' que você passa (ex: "weather?key=...&city_name=...")
    // será a query string da requisição para a Serverless Function.
    const fullProxyUrl = `${PROXY_URL}?${endpoint}`;

    // setLoading(true); // Se você adicionar o estado de loading

    axios
      .get(fullProxyUrl)
      .then((response) => {
        setData(response.data);
        // setLoading(false); // Se você adicionar o estado de loading
        // setError(null); // Se você adicionar o estado de erro
      })
      .catch((error) => {
        console.error('Erro na requisição para o proxy Vercel:', error);
        setData(null);
        // setError(error); // Se você adicionar o estado de erro
        // setLoading(false); // Se você adicionar o estado de loading
      });
  }, [endpoint]); // A dependência agora é apenas o 'endpoint', já que PROXY_URL é fixo

  return { data }; // Retorne também loading e error se os adicionar
};
