import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import useUser from '@/hooks/useUser';
import UserData from '@/components/user';
import FilmContainer from '@/components/film/filmContainter';
import SeriesContainer from '@/components/series/seriesContainer';

const User = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <ClipLoader size={80} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <UserData data={fetchedUser} />
      <FilmContainer data={fetchedUser.film} />
      <SeriesContainer data={fetchedUser.series} />
    </div>
  );
};

export default User;
