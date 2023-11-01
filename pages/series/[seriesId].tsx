import useSerie from '@/hooks/useSerie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

import RatingBlock from '@/components/ratingBlock/ratingBlock';

const Series = () => {
  const router = useRouter();
  const { seriesId } = router.query;
  const { data, isLoading } = useSerie(seriesId as string);
  console.log(data);

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
        <div className="relative lg:h-[325px] lg:w-[250px] md:h-[225px] md:w-[125px] h-[200px] w-[125px] rounded-md border-2 border-green-400">
          <Image
            src={
              data?.poster_path
                ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                : '/notfound.jpg'
            }
            layout="fill"
            fill={true}
            alt="image"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {data?.homepage && (
          <a
            className="text-xl cursor-pointer hover:underline"
            href={`${data?.homepage}`}
            target="_blank">
            Movie site
          </a>
        )}
      </div>

      <div className="xl:col-span-4 col-span-3 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-1 items-center">
            <h1 className="text-white text-4xl font-bold mb-4">{data?.original_name}</h1>
            {data?.created_by[0] && (
              <p className="ml-4 text-md font-semibold text-white">
                Directed by <span className="font-bold">{data?.created_by[0]?.name}</span>
              </p>
            )}
          </div>
          <div className="text-xl text-neutral-500">
            {data?.overview ? data?.overview : 'no overview'}
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 col-span-1">
        <RatingBlock />
      </div>
    </div>
  );
};

export default Series;
