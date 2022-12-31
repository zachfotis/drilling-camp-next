import Link from 'next/link';

type News = {
  id: number;
  author: string;
  link: string;
  image: string;
  date: string;
  title: string;
  description: string;
};

function NewsThumb({ news }: { news: News }) {
  return (
    <div className="w-full py-5 laptop:w-[300px] mobile:min-w-full">
      <Link href={news.link} target="_blank">
        <img src={news.image} alt={news.title} className="w-full h-[150px] object-cover rounded-md shadow-sm" />
      </Link>
      <div className="flex justify-start items-center gap-2 my-2 mt-3">
        <p className="text-xs font-[600] text-red-500">{news.author}</p>
        <span className="w-[1px] h-[10px] bg-gray-400 rounded-xl"></span>
        <p className="text-xs font-[300] text-gray-700">{news.date}</p>
      </div>
      <div className="flex justify-start flex-col items-start gap-2">
        <Link href={news.link} target="_blank">
          <h1 className="text-lg font-[600] leading-normal">{news.title}</h1>
        </Link>
        <p className="text-sm font-[300] text-gray-700">{news.description}</p>
      </div>
    </div>
  );
}
export default NewsThumb;
