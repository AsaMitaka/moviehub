import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const usePerson = (personId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `https://api.themoviedb.org/3/person/${personId}`,
    fetcher,
  );

  return { data, error, isLoading, mutate };
};

export default usePerson;
