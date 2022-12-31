import { ImNewspaper } from 'react-icons/im';
import NewsThumb from '../NewsThumb';
import cheerio from 'cheerio';
import Loader from '../Loader';

const getNews = async () => {
  const newsHeadlinesRequest = await fetch('https://www.rigzone.com/news/industry_headlines/', {
    next: {
      revalidate: 86400, // 1 day
    },
  });
  const newsHeadlinesResponse = await newsHeadlinesRequest.text();
  const $ = cheerio.load(newsHeadlinesResponse);

  const newsHeadlines = $('.headlineContainer');
  const newsHeadlinesArray: News[] = [];
  newsHeadlines.each((index, element) => {
    if (index < 5) {
      const newsHeadline = $(element);
      const newsHeadlineTitle = newsHeadline.find('a').text();
      const newsHeadlineLink = newsHeadline.find('a').attr('href');

      let newsHeadlineDate = newsHeadline.find('.description .date').text();
      newsHeadlineDate = newsHeadlineDate.split(',').slice(1).join(',').trim();
      let month = newsHeadlineDate.split(' ')[0];
      month = month.slice(0, 3);
      newsHeadlineDate = [month, newsHeadlineDate.split(' ').slice(1).join(' ')].join(' ');

      const newsHeadlineDescription = newsHeadline
        .find('.description')
        .contents()
        .filter(function () {
          return this.type === 'text';
          // @ts-ignore
        })[0].data;

      if (newsHeadlineLink === undefined) {
        return;
      }

      const newsHeadlineObject = {
        id: index,
        author: 'Rigzone',
        link: 'https://www.rigzone.com' + newsHeadlineLink.toString(),
        image: '',
        date: newsHeadlineDate,
        title: newsHeadlineTitle,
        description: newsHeadlineDescription,
      };

      newsHeadlinesArray.push(newsHeadlineObject);
    }
  });

  return newsHeadlinesArray;
};

const getPageContent = async (news: News[]) => {
  for (let i = 0; i < news.length; i++) {
    const item = news[i];

    const pageContent = await fetch(item.link);
    const pageContentText = await pageContent.text();
    const $$ = cheerio.load(pageContentText);

    const newsHeadlineImage = $$('.article_img_container img').attr('src');
    if (newsHeadlineImage === undefined) {
      continue;
    }
    item.image = newsHeadlineImage.toString();
  }

  return news;
};

async function LatestNews() {
  let news = [] as News[];
  try {
    news = await getNews();
    news = await getPageContent(news);
    console.log('News Articles Fetched at: ' + new Date().toLocaleTimeString());
  } catch (error) {
    console.log('Error Fetching News Articles: ' + error);
  }

  return (
    <div className="w-[250px] h-full flex flex-col justify-start items-center laptop:w-full">
      <div className="w-full flex justify-start items-center gap-2">
        <ImNewspaper className="text-2xl text-secondary" />
        <h1 className="text-xl font-[500]">Latest News!</h1>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-5 mt-5 laptop:flex-row laptop:flex-wrap laptop:gap-x-10 laptop:items-stretch">
        {news.length > 0 ? (
          news.map((news) => <NewsThumb key={news.id} news={news} />)
        ) : (
          <h1 className="text-sm font-[500]">No News Found</h1>
        )}
      </div>
    </div>
  );
}
export default LatestNews;
