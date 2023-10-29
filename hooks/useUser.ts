import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/user/${userId}`, fetcher);

  return { data, error, isLoading, mutate };
};

export default useUser;
