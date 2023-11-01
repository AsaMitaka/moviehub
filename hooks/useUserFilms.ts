import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useUserFilms = (userId: string) => {
  const url = userId ? `/api/films?userId=${userId}` : null;

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};

export default useUserFilms;
