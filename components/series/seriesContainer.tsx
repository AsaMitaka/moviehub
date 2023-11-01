import SeriesItem from './seriesItem';

interface SeriesContainerProps {
  data: Record<string, any>;
}

const SeriesContainer: React.FC<SeriesContainerProps> = ({ data }) => {
  return (
    <>
      <div className="mb-4 grid xl:grid-cols-8 xl:grid-rows-3 lg:grid-cols-6 lg:grid-rows-4 md:grid-cols-4 md:grid-rows-5 sm:grid-cols-2 sm:grim-rows-10 gap-4">
        {data &&
          data.map((data: Record<string, any>, index: number) => (
            <SeriesItem key={index} data={data} />
          ))}
      </div>
    </>
  );
};

export default SeriesContainer;
