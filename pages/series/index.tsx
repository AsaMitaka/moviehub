import ContainerButton from '@/components/containerButton';
import SeriesContainer from '@/components/series/seriesContainer';
import useSeries from '@/hooks/useSeries';

import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Series = () => {
  const [page, setPage] = useState(1);
  const { data: fetchedData, isLoading } = useSeries(page as number);

  if (isLoading) {
    return (
      <div className="w-screen px-3 py-4 flex items-center justify-center">
        <ClipLoader color="text-green-500" size={80} />
      </div>
    );
  }

  return (
    <div className="px-2 py-3">
      <SeriesContainer data={fetchedData.results} />
      <ContainerButton page={page} setPage={setPage} />
    </div>
  );
};

export default Series;
