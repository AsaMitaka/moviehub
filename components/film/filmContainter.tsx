import FilmItem from './filmItem';

interface FilmContainerProps {
  data: Record<string, any>;
}

const FilmContainer: React.FC<FilmContainerProps> = ({ data }) => {
  return (
    <div className="mb-4 grid grid-cols-10 grid-rows-2 gap-4">
      {data &&
        data.map((data: Record<string, any>, index: number) => (
          <FilmItem data={data} key={index} />
        ))}
    </div>
  );
};

export default FilmContainer;
