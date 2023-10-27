import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const HeaderLogo = () => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="cursor-pointer hover:opacity-70" onClick={handleClick}>
      <Image src="/movie.svg" width={100} height={100} alt="logo" />
    </div>
  );
};

export default HeaderLogo;
