import useUserFilms from '@/hooks/useUserFilms';
import { useRouter } from 'next/router';

const UserFilm = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: fetchedFilms = [] } = useUserFilms(userId as string);

  return <div>Film</div>;
};

export default UserFilm;
