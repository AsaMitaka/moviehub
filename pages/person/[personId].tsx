import usePerson from '@/hooks/usePerson';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

const Person = () => {
  const router = useRouter();
  const { persodId } = router.query;

  const { data: fetchedPerson, isLoading } = usePerson(persodId as string);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <ClipLoader size={80} />
      </div>
    );
  }

  return <div></div>;
};

export default Person;
