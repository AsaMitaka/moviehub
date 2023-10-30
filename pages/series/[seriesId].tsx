import RatingBlock from '@/components/ratingBlock/ratingBlock';
import useSerie from '@/hooks/useSerie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

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
    <div className="flex flex-row gap-8">
      <Image
        src={
          data?.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/notfound.jpg'
        }
        className="rounded-md border-2 border-green-400"
        width={200}
        height={350}
        alt="image"
      />
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 items-center">
          <h1 className="text-white text-4xl font-bold mb-4">{data?.original_name}</h1>
          <p className="ml-4 text-md font-semibold text-white">
            Directed by <span className="font-bold">{data?.created_by[0]?.name}</span>
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <div className="">{data?.overview}</div>
          <RatingBlock />
        </div>
      </div>
    </div>
  );
};

export default Series;
