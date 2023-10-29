import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { AiOutlineEye, AiFillEye, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface SeriesItemProps {
  data: Record<string, any>;
}

const SeriesItem: React.FC<SeriesItemProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/series/${data.id}`);
  }, [data.id, router]);

  return (
    <div className="px-2 py-3 relative cursor-pointer hover:opacity-80" onClick={handleClick}>
      <Image
        src={
          data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/notfound.jpg'
        }
        width={100}
        height={150}
        alt="image"
      />
      <div className="absolute">
        <div className="cursor-pointer">
          <AiOutlineEye color="text-black" size={20} />
        </div>
        <div className="cursor-pointer">
          <AiOutlineHeart color="text-black" size={20} />
        </div>
      </div>
    </div>
  );
};

export default SeriesItem;
