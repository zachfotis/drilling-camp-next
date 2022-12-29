import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '../../assets/images/logo.png';
import NavLink from './NavLink';
import { AiOutlineHome } from 'react-icons/ai';
import { IoLibraryOutline } from 'react-icons/io5';
import { TfiBlackboard } from 'react-icons/tfi';
import { BsInfoCircle } from 'react-icons/bs';
import { SlBriefcase } from 'react-icons/sl';

const routes = [
  {
    name: 'Home',
    path: '/',
    icon: <AiOutlineHome className="text-xl" />,
  },
  {
    name: 'Library',
    path: '/library',
    icon: <IoLibraryOutline className="text-xl" />,
  },
  {
    name: 'Courses',
    path: '/courses',
    icon: <TfiBlackboard className="text-xl" />,
  },
  {
    name: 'Training',
    path: '/training',
    icon: <SlBriefcase className="text-xl" />,
  },
  {
    name: 'About',
    path: '/about',
    icon: <BsInfoCircle className="text-xl" />,
  },
];

function Navbar() {
  return (
    <nav className="w-full bg-primary text-white font-[300] p-5 shadow-lg sticky top-0 antialiased">
      <div className="w-full flex justify-between items-center max-w-[1280px] mx-auto">
        <Link href="/" className="flex justify-start items-center gap-5">
          <Image src={LogoImage} alt="Drilling Camp Logo" width={40} height={40} />
          <h1 className="text-lg font-[500] tablet:hidden">Drilling Camp</h1>
        </Link>
        <ul className="flex justify-start items-center gap-5 mobile:gap-2">
          {routes.map((route) => (
            <li key={route.name}>
              <NavLink route={route} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
