import fetcher from '@/libs/fetcher';
import useSWR from 'swr';
import useCurrent from './useCurrent';

const useRate = ({ movieId, type, rating }: { movieId: string; type: string; rating: string }) => {
  const { data: currentUser } = useCurrent();
  const { data, error, isLoading, mutate } = useSWR('', fetcher);

  return {};
};

export default useRate;
