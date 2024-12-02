'use client';
import Link from 'next/link';

import { socials } from '@/constants';

const Socials = () => {
  return (
    <div className='flex gap-6'>
      {socials.map(social => (
        <Link
          className='w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
          href={social.path}
          key={social.name}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
