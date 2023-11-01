import { useEffect, useState } from 'react';
import FilmCastItem from './filmCast';

interface FilmCastContainerProps {
  cast: Record<string, any>[];
}

const FilmCastContainer: React.FC<FilmCastContainerProps> = ({ cast }) => {
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    if (cast?.length > 10) {
      setShowAll(false);
    }
  }, [cast]);

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-green-500 text-xl">Cast: </h1>
      <div className="grid grid-cols-3 gap-3">
        {cast &&
          cast
            .slice(0, showAll ? cast?.length : 10)
            .map((item: Record<string, any>) => <FilmCastItem key={item.id} item={item} />)}

        {cast?.length > 10 && !showAll && (
          <button
            className="w-fit px-2 py-1 border-2 border-white cursor-pointer hover:opacity-80"
            onClick={handleShowAllClick}>
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default FilmCastContainer;
