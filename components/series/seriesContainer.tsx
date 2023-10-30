import SeriesItem from './seriesItem';

interface SeriesContainerProps {
  data: Record<string, any>;
}

const SeriesContainer: React.FC<SeriesContainerProps> = ({ data }) => {
  return (
    <>
      <div className="mb-4 grid grid-cols-10 grid-rows-2 gap-4">
        {data &&
          data.map((data: Record<string, any>, index: number) => (
            <SeriesItem key={index} data={data} />
          ))}
      </div>
    </>
  );
};

export default SeriesContainer;
