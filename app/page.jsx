import Photo from '@/components/photo';
import Socials from '@/components/socials';
import Stats from '@/components/stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div
          className='flex flex-col xl:flex-row items-center justify-between
  xl:pt-8 xl:pb-24'
        >
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Frontend Engineer</span>
            <h1 className='h2 mb-6'>
              Hello I&apos;m <br />{' '}
              <span className='text-accent'>Tolunay Tezcan</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I am a front-end engineer focused on creating engaging web and
              mobile applications using React and React Native. I prioritize
              user experience and always look for ways to improve my skills and
              keep up with industry trends.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
        <div className='f'>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
