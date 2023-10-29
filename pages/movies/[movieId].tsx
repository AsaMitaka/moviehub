import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data, isLoading } = useMovie(movieId as string);
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <ClipLoader color="text-green-500" size={80} />
      </div>
    );
  }

  return <div></div>;
};

export default Movie;
