import { api } from '@/config/axios';
import { useQuery } from '@tanstack/react-query';

export const useGetProfile = () =>
  useQuery({
    queryKey: ['GET_PROFILE_DETAILS'],
    queryFn: async () => await api.get('/auth/profile'),
    select: (data) => data.data.data,
  });
