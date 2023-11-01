import ContainerButton from '@/components/containerButton';
import FilmContainer from '@/components/film/filmContainter';
import useMovies from '@/hooks/useMovies';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { data: fetchedData, isLoading } = useMovies(page as number);
  console.log(fetchedData);

  if (isLoading) {
    return (
      <div className="w-screen px-3 py-4 flex items-center justify-center">
        <ClipLoader color="text-green-500" size={80} />
      </div>
    );
  }

  return (
    <div className="px-2 py-3 mx-auto">
      <FilmContainer data={fetchedData.results} />
      <ContainerButton page={page} setPage={setPage} />
    </div>
  );
};

export default Movies;
