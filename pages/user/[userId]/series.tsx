import useUserSeries from '@/hooks/useUserSeries';
import { useRouter } from 'next/router';

const UserSeries = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: fetchedSeries = [] } = useUserSeries(userId as string);

  return <div>Series</div>;
};

export default UserSeries;
