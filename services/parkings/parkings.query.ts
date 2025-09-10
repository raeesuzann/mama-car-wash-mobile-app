import { api } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetParkingList = () =>
  useQuery({
    queryKey: ['GET_PARKINGS'],
    queryFn: async () => await api.get('/parkings'),
    select: (data) => data.data.data,
  });
