import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useWatch = () => {
  const { data, error, isLoading, mutate } = useSWR('', fetcher);

  return {};
};

export default useWatch;
