import Image from 'next/image';
import RigsImage from '../../assets/images/rigs2.png';
import FeatureCard from './FeatureCard';
import { FcLibrary, FcGraduationCap, FcBriefcase } from 'react-icons/fc';
import Link from 'next/link';

function Hero() {
  return (
    <div className="flex-shrink-0 relative min-h-[calc(80vh-80px)] w-full overflow-x-hidden py-5">
      <div className="max-w-[1280px] mx-auto rounded-lg flex flex-col justify-start items-start gap-10 px-5 mt-10">
        <div className="w-full">
          <h1 className="text-4xl font-[500]">Welcome to the Drilling Camp academy!</h1>
          <p className="text-base mt-5">
            Here, you can find a wide range of articles, courses and training programs to help you become a proficient
            Drilling Engineer.
          </p>
        </div>
        <Link
          href="services"
          className="px-5 py-2 bg-accent text-gray-700 rounded-lg shadow-md font-[600] text-lg hover:scale-105
          transition-all duration-300 ease-in-out"
        >
          Explore Library
        </Link>
        <div className="w-full flex justify-start items-center gap-20 py-5 mt-5 tablet:overflow-x-scroll snap-x">
          <FeatureCard
            key="library"
            title="Academy's Library"
            icon={<FcLibrary className="text-8xl" />}
            link="/library"
          />
          <FeatureCard
            key="courses"
            title="Engineering Courses"
            icon={<FcGraduationCap className="text-8xl" />}
            link="/courses"
          />
          <FeatureCard
            key="training"
            title="Professional Training"
            icon={<FcBriefcase className="text-8xl" />}
            link="/training"
          />
        </div>
        <div
          className="before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[200px] before:opacity-100
            before:bg-gradient-to-t from-slate-50 to-transparent"
        >
          <Image
            src={RigsImage}
            alt="Drilling Rig"
            width={1920}
            height={1080}
            className="w-full h-full object-cover absolute top-0 left-0 -z-10 opacity-20"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
