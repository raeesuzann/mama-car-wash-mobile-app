import { api } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetWashList = () =>
  useQuery({
    queryKey: ['GET_WASH_LIST'],
    queryFn: async () => await api.get('/wash'),
    select: (data) => data.data,
  });
