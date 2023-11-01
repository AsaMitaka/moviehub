import useMovie from '@/hooks/useMovie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

import RatingBlock from '@/components/ratingBlock/ratingBlock';
import useCast from '@/hooks/useCast';
import FilmCastContainer from '@/components/film/filmCastContainer';
import { AiOutlineLink } from 'react-icons/ai';

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: fetchedMovie, isLoading } = useMovie(movieId as string);
  const { data: fetchedCast } = useCast(movieId as string);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <ClipLoader color="text-green-500" size={80} />
      </div>
    );
  }

  return (
    <div className="w-full grid xl:grid-cols-8 grid-cols-5 gap-4">
      <div className="xl:col-span-2 col-span-1 flex flex-col gap-3">
        <div className="relative lg:h-[325px] lg:w-[250px] md:h-[225px] md:w-[125px] rounded-md border-2 border-green-400">
          <Image
            src={
              fetchedMovie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${fetchedMovie?.poster_path}`
                : '/notfound.jpg'
            }
            layout="fill"
            fill={true}
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {fetchedMovie?.homepage && (
          <a
            className="flex flex-row gap-2 text-xl cursor-pointer hover:underline"
            href={`${fetchedMovie?.homepage}`}
            target="_blank">
            <AiOutlineLink size={24} /> Movie site
          </a>
        )}
      </div>

      <div className="xl:col-span-4 col-span-3 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-1 items-center">
            <h1 className="text-white text-4xl font-bold mb-4">{fetchedMovie?.original_title}</h1>
          </div>
          <div className="flex flex-row justify-between gap-3">
            <div className="flex justify-start">{fetchedMovie?.overview}</div>
          </div>
          <FilmCastContainer cast={fetchedCast?.cast} />
        </div>
      </div>

      <div className="xl:col-span-2 col-span-1">
        <RatingBlock />
      </div>
    </div>
  );
};

export default Movie;
