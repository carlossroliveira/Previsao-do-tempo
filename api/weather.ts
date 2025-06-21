// seu-projeto/api/weather.ts
// Esta é uma Serverless Function do Vercel que atua como um proxy CORS.
// Ela recebe requisições do seu frontend e as retransmite para a API da HG Brasil.

// import type { VercelRequest, VercelResponse } from '@vercel/node'; // Se você tiver @vercel/node instalado
// Se não tiver @vercel/node, pode usar 'any' para os tipos, como abaixo:

// export default async (request: VercelRequest, response: VercelResponse) => {
export default async (request: any, response: any) => {
  // Use este se o de cima der erro de tipo

  try {
    // 1. Pega os parâmetros da query (como 'key', 'city_name', 'array_limit', etc.)
    // que vieram da requisição do seu frontend (ex: /api/weather?key=...&city_name=...)
    const queryParams = new URLSearchParams(
      request.query as Record<string, string>,
    );

    // 2. Sua API Key da HG Brasil (REACT_APP_API_KEY) está nas variáveis de ambiente do Vercel.
    // Ela é automaticamente acessível aqui nesta Serverless Function.
    const HGBRASIL_API_KEY = 'https://api.hgbrasil.com/';

    // 3. Garante que a chave da API esteja presente nos parâmetros para a HG Brasil.
    // (Se seu frontend já envia, isso garante que ela exista)
    if (HGBRASIL_API_KEY && !queryParams.has('key')) {
      queryParams.set('key', HGBRASIL_API_KEY);
    } else if (!HGBRASIL_API_KEY) {
      // Se a chave não estiver configurada, retorne um erro
      return response.status(500).json({
        error:
          'Erro de configuração: REACT_APP_API_KEY não definida no Vercel.',
      });
    }

    // 4. Constrói a URL completa para a API real da HG Brasil
    const HG_BRASIL_BASE_URL = 'https://api.hgbrasil.com/weather';
    const fullApiUrl = `${HG_BRASIL_BASE_URL}?${queryParams.toString()}`;

    // 5. Faz a requisição de servidor para servidor para a HG Brasil.
    // Esta requisição NÃO é afetada por CORS.
    const apiResponse = await fetch(fullApiUrl);

    // 6. Verifica se a resposta da HG Brasil foi bem-sucedida
    if (!apiResponse.ok) {
      const errorBody = await apiResponse.text();
      console.error(
        `Erro da API HG Brasil (${apiResponse.status}):`,
        errorBody,
      );
      // Repassa o status e a mensagem de erro da HG Brasil para o frontend
      return response.status(apiResponse.status).send(errorBody);
    }

    // 7. Pega os dados JSON da HG Brasil
    const data = await apiResponse.json();

    // 8. Retorna os dados para o seu frontend
    // O Vercel lida com os cabeçalhos CORS automaticamente para suas Serverless Functions
    response.status(200).json(data);
  } catch (error) {
    console.error('Erro na Serverless Function (proxy):', error);
    // Retorna um erro genérico em caso de falha interna
    response
      .status(500)
      .json({ error: 'Falha interna do servidor ao buscar dados do clima.' });
  }
};
