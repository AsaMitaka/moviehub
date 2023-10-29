import HeaderItem from './headerItem';
import HeaderLogo from './headerLogo';

const Header = () => {
  const items = [
    {
      label: 'movies',
      href: '/movies',
      auth: false,
    },
    {
      label: 'tv series',
      href: '/series',
      auth: false,
    },
    {
      label: 'profile',
      href: '/user/1',
      auth: true,
    },
  ];

  return (
    <div className="w-full sticky text-white bg-neutral-500">
      <div className="flex py-3 flex-row items-center justify-between mx-auto max-w-5xl lg:max-w-7xl">
        <div>
          <HeaderLogo />
        </div>
        <div className="flex flex-row items-center gap-5">
          {items.map((item, index) => (
            <HeaderItem
              auth={item.auth}
              href={item.href}
              key={`${index}__${item.label}`}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
