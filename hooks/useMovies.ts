import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useMovies = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_APIKEY}`,
    fetcher,
  );

  return { data, error, isLoading, mutate };
};

export default useMovies;
