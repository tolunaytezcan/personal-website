'use client';
import Link from 'next/link';

import { socials } from '@/constants';

const Socials = () => {
  return (
    <div className='flex gap-6'>
      {socials.map(social => {
        // Eğer path http ile başlıyorsa veya github/linkedin/instagram içeriyorsa, harici link olarak işle
        const isExternalLink = social.path.startsWith('http') || 
          social.path.includes('github') || 
          social.path.includes('linkedin') || 
          social.path.includes('instagram');

        if (isExternalLink) {
          return (
            <a
              key={social.name}
              href={social.path}
              target="_blank"
              rel="noopener noreferrer"
              className='w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
            >
              {social.icon}
            </a>
          );
        }

        return (
          <Link
            key={social.name}
            href={social.path}
            className='w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
