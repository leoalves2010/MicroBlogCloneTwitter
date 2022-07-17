import useSWR from 'swr';
import { ApiService } from '../services/ApiService';

export function useApi(endPoint, config){
    const { data, error } = useSWR(endPoint, async (endPoint, config) => {
        const response = await ApiService(endPoint, config);
        return response.data;
    });
    
    return { data, error };
}