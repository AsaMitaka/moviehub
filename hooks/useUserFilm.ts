import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useUserFilms = (filmId: string) => {
  const url = filmId ? `/api/films/${filmId}` : null;

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};

export default useUserFilms;
