import { BsBookmarkPlus } from 'react-icons/bs';

type Article = {
  id: number;
  author: string;
  avatar: string;
  date: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  image: string;
};

function ArticleThumb({ article }: { article: Article }) {
  return (
    <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-3 mt-5">
      <div className="flex justify-start items-center gap-2">
        <img src={article.avatar} alt="author avatar" className="w-5" />
        <p className="text-sm font-[500]">{article.author}</p>
        <p className="text-sm text-gray-700 font-[400]">{article.date}</p>
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-xl font-[600] leading-normal">{article.title}</h1>
        <div className="flex justify-start items-center gap-5">
          <p className="text-sm font-[300]">{article.description}</p>
          <img src={article.image} alt="article thumb" className="w-[75x] h-[75px] object-cover rounded-lg shadow-sm" />
        </div>
      </div>
      <div className="flex justify-start items-center gap-5 mt-5">
        <p className="text-sm font-[300] px-3 py-1 bg-primary text-white rounded-3xl">{article.category}</p>
        <p className="text-sm font-[300] text-gray-700">{article.readTime} min read</p>
        <BsBookmarkPlus className="text-2xl text-gray-700 cursor-pointer" />
      </div>
      <span className="w-full h-[2px] bg-gray-300 rounded-lg shadow-lg mt-5"></span>
    </div>
  );
}
export default ArticleThumb;
