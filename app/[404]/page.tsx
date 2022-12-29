import Image from 'next/image';
import NotFoundImage from '../../assets/images/404.png';

function page() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-5">
      <Image src={NotFoundImage} alt="404" width={300} />
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-lg font-[500]">Oops!</span>
        <p className="text-sm font-[400] text-center">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
export default page;
