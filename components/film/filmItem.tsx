import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { AiOutlineEye, AiFillEye, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface FilmItemProps {
  data: Record<string, any>;
}

const FilmItem: React.FC<FilmItemProps> = ({ data }) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  const handleClick = useCallback(() => {
    router.push(`/movies/${data.id}`);
  }, [data.id, router]);

  const handleLiked = useCallback((event: any) => {
    event.stopPropagation();
  }, []);

  const handleWatched = useCallback((event: any) => {
    event.stopPropagation();
  }, []);

  return (
    <div
      className="border-2 border-grey-300 relative cursor-pointer hover:opacity-80 hover:border-2 hover:border-green-500"
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <Image
        src={
          data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/notfound.jpg'
        }
        className=""
        width={100}
        height={150}
        alt="image"
      />
      {isHover && (
        <div className="absolute bottom-3 left-0 right-0 px-2 py-1 flex items-center justify-center gap-2 bg-neutral-600 opacity-80">
          <div className="cursor-pointer hover:opacity-30" onClick={handleWatched}>
            <AiOutlineEye color="white" size={20} />
          </div>
          <div className="cursor-pointer hover:opacity-30" onClick={handleLiked}>
            <AiOutlineHeart color="white" size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmItem;
