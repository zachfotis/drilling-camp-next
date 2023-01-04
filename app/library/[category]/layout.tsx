import Link from 'next/link';
import { FcLibrary } from 'react-icons/fc';
import { RxChevronRight } from 'react-icons/rx';
import Menu from '../../../components/library/Menu';

interface Props {
  children: React.ReactNode;
  params: { category: string };
}

export default function RootLayout({ children, params: { category } }: Props) {
  return (
    <div className="flex justify-start items-start gap-24">
      <Menu />
      <div className="my-3 flex flex-col justify-start items-start gap-10">
        <div className="flex justify-start items-center gap-3">
          <Link href="/library" className="flex justify-start items-center gap-2">
            <FcLibrary className="inline-block text-xl" />
          </Link>
          <RxChevronRight className="inline-block text-xl" />
          <h1>Articles</h1>
          <RxChevronRight className="inline-block text-xl" />
          <Link href={`/library/${category}`}>
            <h1 className="font-[500]">{category?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</h1>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
