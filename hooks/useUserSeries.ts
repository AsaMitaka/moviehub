import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useUserSeries = (userId: string) => {
  const url = userId ? `/api/series?userId=${userId}` : null;

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};

export default useUserSeries;
