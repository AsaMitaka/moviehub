import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface FilmCastItemProps {
  item: Record<string, any>;
}

const FilmCastItem: React.FC<FilmCastItemProps> = ({ item }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/person/${item.id}`);
  }, [item.id, router]);

  return (
    <div
      className="w-fit px-2 py-1 border-2 border-white cursor-pointer hover:opacity-80"
      key={item.id}
      onClick={handleClick}>
      {item.name}
    </div>
  );
};

export default FilmCastItem;
