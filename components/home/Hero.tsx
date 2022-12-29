import Image from 'next/image';
import RigsImage from '../../assets/images/rigs2.png';
import FeatureCard from './FeatureCard';
import { FcLibrary, FcGraduationCap, FcBriefcase } from 'react-icons/fc';

function Hero() {
  return (
    <>
      <div className="w-full h-fit rounded-lg flex flex-col justify-start items-start gap-20 py-5 mt-10">
        <div className="w-full">
          <h1 className="text-4xl font-[500]">Welcome to the Drilling Camp academy!</h1>
          <p className="text-base mt-5">
            Here, you can find a wide range of articles, courses and training programs to help you become a proficient
            Drilling Engineer.
          </p>
        </div>
        <div className="w-full flex justify-start items-center gap-20">
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
      </div>
      <Image
        src={RigsImage}
        alt="Drilling Rig"
        width={1920}
        height={1080}
        className="w-full h-screen object-cover absolute top-0 left-0 -z-10 opacity-20"
      />
    </>
  );
}
export default Hero;
