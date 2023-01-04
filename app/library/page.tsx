import Image from 'next/image';
import BannerImage from '../../assets/images/rig-library2.jpg';
import { IoLibraryOutline } from 'react-icons/io5';
import FeaturedArticle from '../../components/library/FeaturedArticle';
import TopCategories from '../../components/library/TopCategories';

function page() {
  return (
    <div className="flex-1 my-3 flex flex-col justify-start items-start gap-10">
      <div className="relative w-full">
        <Image
          src={BannerImage}
          width={1280}
          height={720}
          alt="banner"
          className="w-full h-[150px] object-cover rounded-md opacity-60 shadow-lg"
        />
        <div
          className="w-full absolute top-[50%] right-[50%] text-5xl font-[600] text-primary 
          backdrop-brightness-110 backdrop-filter backdrop-blur-md p-4 overflow-hidden
          transform -translate-y-1/2 translate-x-1/2 border-y border-y-primary
          flex justify-center items-center gap-5
        "
        >
          <IoLibraryOutline />
          <h1>Library</h1>
        </div>
      </div>
      <TopCategories />
      <FeaturedArticle />
    </div>
  );
}
export default page;
