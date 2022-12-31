import Link from 'next/link';
import { BsBookmarkPlus } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';

function ArticleThumb({ article }: { article: Article }) {
  return (
    <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-2 mt-5">
      <div className="flex justify-start items-center gap-2">
        <FaUserGraduate className="text-base text-gray-700" />
        <p className="text-xs font-[500]">{article.author}</p>
        <p className="text-xs text-gray-700 font-[400]">{article.date}</p>
      </div>
      <div className="flex flex-col justify-start items-start gap-1 mt-2">
        <Link href={article.link}>
          <h1 className="text-xl font-[600] leading-normal">{article.title}</h1>
        </Link>
        <div className="flex justify-start items-start gap-5 mobile:flex-col">
          <p className="text-sm font-[300] mt-1">{article.description}</p>
          <Link href={article.link} className="flex-shrink-0 w-[200px] h-[100px] mobile:w-full mobile:h-[150px]">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover rounded-lg shadow-sm" />
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center gap-5 mt-2 mobile:mt-5">
        <p className="text-xs font-[400] px-3 py-1 bg-primary text-white rounded-3xl">{article.category}</p>
        <p className="text-xs font-[400] text-gray-700">{article.readTime} min read</p>
        <BsBookmarkPlus className="text-xl text-gray-700 cursor-pointer hover:text-accent" />
      </div>
      <span className="w-full h-[2px] bg-gray-300 rounded-lg shadow-lg mt-5"></span>
    </div>
  );
}
export default ArticleThumb;
