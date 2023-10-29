import SeriesItem from './seriesItem';

interface SeriesContainerProps {
  data: Record<string, any>;
  page: number;
}

const SeriesContainer: React.FC<SeriesContainerProps> = ({ data, page }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      {data &&
        data.map((data: Record<string, any>, index: number) => (
          <SeriesItem key={index} data={data} />
        ))}
    </div>
  );
};

export default SeriesContainer;
