import { IoDocumentTextOutline } from 'react-icons/io5';
import ArticleThumb from '../ArticleThumb';

function LatestArticles() {
  return (
    <div className="flex-3">
      <div className="flex items-center gap-2">
        <IoDocumentTextOutline className="text-2xl text-secondary" />
        <h1 className="text-xl font-[500]">Latest Articles!</h1>
      </div>
      <div className="flex flex-col justify-start items-start gap-10 mt-5">
        {articles.map((article) => (
          <ArticleThumb article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
}
export default LatestArticles;

const articles = [
  {
    id: 1,
    author: 'Fotios N. Zachopoulos',
    date: 'Dec 30',
    link: 'https://www.sciencedirect.com/science/article/pii/S0140988320301205',
    title: 'The Art of Drilling Engineering',
    description:
      'Drilling engineering is a subfield of petroleum engineering that focuses on the design and implementation of drilling operations for oil and gas wells. Drilling engineering is a subfield of petroleum engineering that focuses on the design and implementation of drilling operations for oil and gas wells.',
    category: 'Drilling',
    readTime: 4,
    image: 'https://rigzonenews.files.wordpress.com/2015/02/screen-shot-2015-02-25-at-2-05-42-pm.png',
  },
  {
    id: 2,
    author: 'Sarah K. Smith',
    date: 'Jan 15',
    link: 'https://www.sciencedirect.com/science/article/pii/S0140988320301205',
    title: 'Maximizing Production in Offshore Drilling Operations',
    description:
      'Offshore drilling presents unique challenges and opportunities for production optimization. In this article, we will explore the use of advanced technologies. Offshore drilling presents unique challenges and opportunities for production optimization. In this article, we will explore the use of advanced technologies ...',
    category: 'Drilling',
    readTime: 7,
    image: 'https://ceet.upenn.edu/wp-content/uploads/2021/05/Screen-Shot-2021-05-24-at-9.16.17-AM.png',
  },
  {
    id: 3,
    author: 'John D. Thompson',
    date: 'Feb 10',
    link: 'https://www.sciencedirect.com/science/article/pii/S0140988320301205',
    title: 'Managing Drilling Costs and Budgets',
    description:
      'Drilling projects can involve significant costs, from equipment and labor to materials and logistics. Effective cost management is crucial for the success of any drilling operation. Drilling projects can involve significant costs, from equipment and labor to materials and logistics. Effective cost management is crucial ...',
    category: 'Drilling',
    readTime: 5,
    image:
      'https://le-cdn.hibuwebsites.com/97d81cd8d016441893071b7530c4db78/dms3rep/multi/opt/rock-river-minerals-knowedge-center-02-1920w.jpg',
  },
];
