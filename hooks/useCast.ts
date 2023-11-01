import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useCast = (movieId: string) => {
  const url = movieId
    ? `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_APIKEY}`
    : null;

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return { data, error, isLoading, mutate };
};

export default useCast;
