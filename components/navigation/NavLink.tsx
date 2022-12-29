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

  const featuredClass = 'border-2 border-secondary p-2 rounded-md hover:bg-secondary hover:text-black';

  return (
    <Link
      href={route.path}
      className={`
      ${pathname === route.path && 'border-b border-1 laptop:border-none'} 
      p-2 hover:border-none hover:outline hover:outline-1 hover:outline-accent hover:text-accent hover:rounded-md
      text-sm flex justify-center items-center gap-2 transition duration-300 ease-in-out
      `}
    >
      {route?.icon}
      <h1 className="laptop:hidden">{route.name}</h1>
    </Link>
  );
}
export default NavLink;
