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
      className="border-2 border-gray-600 relative cursor-pointer hover:opacity-80 hover:border-2 hover:border-green-500"
      onClick={handleClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className="h-[250px] w-[200px] lg:h-[200px] lg:w-[150px] md:h-[225px] md:w-[125px]">
        <Image
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : '/notfound.jpg'
          }
          layout="fill"
          alt="image"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {isHover && (
        <div className="absolute bottom-3 left-0 right-0 px-2 py-1 flex items-center justify-center gap-2 bg-neutral-600 opacity-80">
          <div className="cursor-pointer hover:opacity-30" onClick={handleWatched}>
            <AiOutlineEye color="white" size={24} />
          </div>
          <div className="cursor-pointer hover:opacity-30" onClick={handleLiked}>
            <AiOutlineHeart color="white" size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmItem;
