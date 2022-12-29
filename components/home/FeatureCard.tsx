'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={link}
        className="w-[270px] flex flex-col justify-center items-center gap-2 p-10 bg-slate-50 outline outline-1 outline-accent rounded-lg shadow-lg"
      >
        {icon}
        <h1 className="w-full text-center">{title}</h1>
      </Link>
    </motion.div>
  );
}
export default FeatureCard;
