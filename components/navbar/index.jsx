'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/constants';

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map(link => (
        <Link
          className={`${
            link.path === pathName && 'text-accent border-b-2 border-accent '
          } capitalize font-medium hover:text-accent transition-all`}
          key={link.name}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
