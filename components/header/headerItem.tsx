import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface HeaderItemProps {
  auth?: boolean;
  href: string;
  label: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ auth, href, label }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (auth) {
      return;
    }

    router.push(href);
  }, [auth, href, router]);

  return (
    <div
      className="text-white text-lg font-semibold uppercase cursor-pointer hover:opacity-50 focus:opacity-50"
      onClick={handleClick}>
      {label}
    </div>
  );
};

export default HeaderItem;
