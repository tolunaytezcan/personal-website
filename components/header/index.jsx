import Link from 'next/link';
import { Button } from '../ui/button';
import Navbar from '../navbar';
import Logo from '../logo';
import MobileNav from '../mobileNav';

const Header = () => {
  return (
    <header className='pb-4 xl:pb-8 pt-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />
        
        <div id='desktop' className='hidden xl:flex items-center gap-8'>
          <Navbar />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div id='mobile' className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
