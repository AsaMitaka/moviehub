import FilmItem from './filmItem';

interface FilmContainerProps {
  data: Record<string, any>;
  page: number;
}

const FilmContainer: React.FC<FilmContainerProps> = ({ data, page }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      {data &&
        data.map((data: Record<string, any>, index: number) => (
          <FilmItem data={data} key={index} />
        ))}
    </div>
  );
};

export default FilmContainer;
