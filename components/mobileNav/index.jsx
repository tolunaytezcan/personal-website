'use client';

import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { links } from '@/constants';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation menu for accessing different sections of the website
        </SheetDescription>
        {/* Logo */}
        <div className='mt-32 mb-40 text-center text-2x1'>
          <SheetClose asChild>
            <Link href='/'>
              <h1 className='text-4xl font-semibold'>
                TolunayTezcan<span className='text-accent'>.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map(link => (
            <SheetClose key={link.name} asChild>
              <Link
                href={link.path}
                className={`${link.path === pathname && 'text-accent border-b-2 border-accent'
                  } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
