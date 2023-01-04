'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IRoute {
  name: string;
  path: string;
  icon: JSX.Element;
}

function NavLink({ route }: { route: IRoute }) {
  const pathname = usePathname();

  return (
    <Link
      href={route.path}
      className={`
      ${pathname === route.path && 'outline outline-1 outline-accent text-accent rounded-md'} 
      hover:outline hover:outline-1 hover:outline-accent hover:text-accent hover:rounded-md
      p-2 text-sm flex justify-center items-center gap-2 transition duration-300 ease-in-out
      `}
    >
      {route?.icon}
      <h1 className="laptop:hidden">{route.name}</h1>
    </Link>
  );
}
export default NavLink;
