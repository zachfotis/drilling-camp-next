'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdStar } from 'react-icons/md';

interface FeatureCardProps {
  title: string;
  icon: JSX.Element;
  link: string;
}

function FeatureCard({ title, icon, link }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '1000px' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      className="relative flex justify-center items-center min-w-[300px] snap-center snap-mandatory bg-slate-50 bg-opacity-70 shadow-md rounded-lg overflow-hidden 
      before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-accent before:z-0 before:opacity-100
      mobile:min-w-full"
    >
      <Link href={link} className="flex-grow flex flex-col justify-center items-center gap-2 p-7">
        {icon}
        <h1 className="w-full text-center">{title}</h1>
        <MdStar className="text-2xl absolute top-2 right-2 text-accent" />
      </Link>
    </motion.div>
  );
}
export default FeatureCard;
