import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav className="w-full bg-primary text-white font-[300] p-5 shadow-lg sticky mb-10">
      <div className="w-full flex justify-between items-center max-w-[1280px] mx-auto">
        <Link href="/" className="flex justify-start items-center gap-5">
          <Image src={LogoImage} alt="Drilling Camp Logo" width={30} height={30} />
          <h1 className="text-lg font-[500]">Drilling Camp</h1>
        </Link>
        <ul className="flex justify-start items-center gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/library">Library</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link
              href="/compose"
              className="border-2 border-secondary p-2 rounded-md hover:bg-secondary hover:text-black transition duration-300 ease-in-out"
            >
              Compose
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
