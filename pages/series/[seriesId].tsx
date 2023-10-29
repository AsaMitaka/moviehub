import useSerie from '@/hooks/useSerie';
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

  return <div></div>;
};

export default Series;
