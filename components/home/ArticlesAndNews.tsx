import { Suspense } from 'react';
import Loader from '../Loader';
import LatestArticles from './LatestArticles';
import LatestNews from './LatestNews';

function ArticlesAndNews() {
  return (
    <div className="max-w-[1280px] mx-auto rounded-lg flex justify-between items-start gap-20 px-5 mb-10 laptop:flex-col laptop:gap-10">
      <LatestArticles />
      <Suspense fallback={<Loader />}>
        {/* @ts-ignore */}
        <LatestNews />
      </Suspense>
    </div>
  );
}
export default ArticlesAndNews;
