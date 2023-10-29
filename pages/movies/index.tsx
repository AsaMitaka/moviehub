import FilmContainer from '@/components/film/filmContainter';
import useMovies from '@/hooks/useMovies';
import { ClipLoader } from 'react-spinners';

const Movies = () => {
  const { data: fetchedData, isLoading } = useMovies();
  console.log(fetchedData);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <ClipLoader color="text-green-500" size={80} />
      </div>
    );
  }

  return (
    <div>
      <FilmContainer data={fetchedData.results} page={fetchedData.page} />
    </div>
  );
};

export default Movies;
