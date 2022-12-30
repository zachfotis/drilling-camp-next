import { ImNewspaper } from 'react-icons/im';
import ArticleThumb from '../ArticleThumb';

function LatestArticles() {
  return (
    <div className="max-w-[1280px] mx-auto rounded-lg flex flex-col justify-start items-start gap-20 px-5 mb-10">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <ImNewspaper className="text-2xl text-secondary" />
          <h1 className="text-xl font-[500]">Latest Articles!</h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 mt-5">
          {articles.map((article) => (
            <ArticleThumb article={article} key={article.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default LatestArticles;

const articles = [
  {
    id: 1,
    author: 'Fotios N. Zachopoulos PhD',
    avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
    date: 'Dec 30',
    title: 'The Art of Drilling Engineering',
    description:
      'Drilling engineering is a subfield of petroleum engineering that focuses on the design and implementation of drilling operations for oil and gas wells. It involves the use of specialized equipment and techniques to drill and complete wells, as well as the management ...',
    category: 'Drilling',
    readTime: 4,
    image: 'https://miro.medium.com/fit/c/140/140/1*nhzt0L8COxhrkxQbvETsaQ.png',
  },
  {
    id: 2,
    author: 'Sarah K. Smith',
    avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
    date: 'Jan 15',
    title: 'Maximizing Production in Offshore Drilling Operations',
    description:
      'Offshore drilling presents unique challenges and opportunities for production optimization. In this article, we will explore the use of advanced technologies and techniques to increase efficiency and productivity in offshore drilling operations. Topics covered include subsea systems, dynamic positioning, and risk management.',
    category: 'Drilling',
    readTime: 7,
    image: 'https://miro.medium.com/fit/c/140/140/1*nhzt0L8COxhrkxQbvETsaQ.png',
  },
  {
    id: 3,
    author: 'John D. Thompson',
    avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
    date: 'Feb 10',
    title: 'Managing Drilling Costs and Budgets',
    description:
      'Drilling projects can involve significant costs, from equipment and labor to materials and logistics. Effective cost management is crucial for the success of any drilling operation. In this article, we will discuss strategies for budgeting and cost control, as well as tools and techniques for monitoring and analyzing costs throughout the drilling process.',
    category: 'Drilling',
    readTime: 5,
    image: 'https://miro.medium.com/fit/c/140/140/1*nhzt0L8COxhrkxQbvETsaQ.png',
  },
];
