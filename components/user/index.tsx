import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../ui/button';
import useUserFilms from '@/hooks/useUserFilms';
import useUserSeries from '@/hooks/useUserSeries';

interface UserDataProps {
  data: Record<string, any>;
}

const UserData: React.FC<UserDataProps> = ({ data }) => {
  const router = useRouter();
  const { data: fetchedFilms = [] } = useUserFilms(data.id);
  const { data: fetchedSeries = [] } = useUserSeries(data.id);

  return (
    <div className="w-full grid xl:grid-cols-6 grid-cols-5 gap-4">
      <div className="xl:col-span-3 col-span-2 flex flex-row items-center gap-3">
        <Image
          src={data?.profileImage ? data?.profileImage : '/notfound.jpg'}
          className="rounded-full border-2 border-white"
          width={100}
          height={100}
          alt="profile image"
        />
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">{data.username}</div>
          <Button label="edit" onClick={() => {}} />
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex flex-row justify-end gap-1 divide-x-2 ">
          <div
            className="text-xl flex flex-col items-center px-1 py-2 cursor-pointer hover:opacity-80"
            onClick={() => router.push(`/user/${data.id}/film`)}>
            {fetchedFilms?.length || 0}
            <span className="text-md">films</span>
          </div>
          <div
            className="text-xl flex flex-col items-center px-1 py-2 cursor-pointer hover:opacity-80"
            onClick={() => router.push(`/user/${data.id}/series`)}>
            {fetchedSeries?.length || 0}
            <span className="text-md">tv series</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
