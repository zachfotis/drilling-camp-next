import Image from 'next/image';
import LogoImage from '../../assets/images/logo.png';

function page() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-5">
      <Image src={LogoImage} alt="404" width={200} height={200} />
      <p className="text-base font-[400]">The page you are looking for does not exist.</p>
    </div>
  );
}
export default page;
