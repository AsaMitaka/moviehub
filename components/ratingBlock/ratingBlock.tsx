import {
  AiOutlineEye,
  AiFillEye,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai';

interface RatingBlockProps {
  isLiked?: boolean;
  isWatched?: boolean;
  rating?: number;
}

const RatingBlock: React.FC<RatingBlockProps> = ({ isLiked, isWatched, rating }) => {
  return (
    <div className="block md:flex md:flex-col rounded-md gap-2 bg-neutral-500">
      <div className="flex flex-row items-center justify-around px-3 py-2 ">
        <div className="flex flex-col items-center  cursor-pointer hover:opacity-30">
          <AiOutlineEye color="white" size={28} />
          <p>Watch</p>
        </div>
        <div className="flex flex-col cursor-pointer hover:opacity-30">
          <AiOutlineHeart color="white" size={28} />
          <p>Like</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center gap-2 px-3 py-2">
        <p className="text-xl text-neutral-100">Rate</p>
        <div className="flex flex-row items-center gap-1">
          <AiOutlineStar className="cursor-pointer hover:opacity-70" size={24} />
          <AiOutlineStar className="cursor-pointer hover:opacity-70" size={24} />
          <AiOutlineStar className="cursor-pointer hover:opacity-70" size={24} />
          <AiOutlineStar className="cursor-pointer hover:opacity-70" size={24} />
          <AiOutlineStar className="cursor-pointer hover:opacity-70" size={24} />
        </div>
      </div>
    </div>
  );
};

export default RatingBlock;
