import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useMovie = (url: string) => {
  const urls = url
    ? `https://api.themoviedb.org/3/movie/${url}?api_key=${process.env.NEXT_PUBLIC_APIKEY}`
    : null;
  const { data, error, isLoading, mutate } = useSWR(urls, fetcher);

  return { data, error, isLoading, mutate };
};

export default useMovie;
