import useSWR from 'swr';
import ApiService from '../services/ApiService';

const fetcher = async (endPoint, config) => {
    const response = await ApiService(endPoint, config);
    return response.data;
}

export function useApi(endPoint, config){
    const { data, error } = useSWR(endPoint, fetcher(endPoint, config));

    if (error) return <div>Falhou em carregar</div>
    if (!data) return <div>Carregando...</div>
    
    return data;
}