import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useSeries = (page: number) => {
  const pages = `&page=${page}`;

  const { data, error, isLoading, mutate } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_APIKEY}${pages}`,
    fetcher,
  );

  return { data, error, isLoading, mutate };
};

export default useSeries;
