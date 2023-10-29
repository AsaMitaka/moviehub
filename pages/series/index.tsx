import SeriesContainer from '@/components/series/seriesContainer';
import useSeries from '@/hooks/useSeries';
import { ClipLoader } from 'react-spinners';

const Series = () => {
  const { data: fetchedData, isLoading } = useSeries();
  console.log(fetchedData);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <ClipLoader color="text-green-500" size={80} />
      </div>
    );
  }

  return (
    <div className="px-2 py-3">
      <SeriesContainer data={fetchedData.results} page={fetchedData.page} />
    </div>
  );
};

export default Series;
