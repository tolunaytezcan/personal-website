'use client';

import { stats } from '@/constants';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {stats.map(item => (
            <div
              key={item.name}
              className='flex flex-1 gap-4 items-center justify-center xl:justify-start'
            >
              <CountUp
                end={item.value}
                duration={3}
                delay={2}
                suffix={item.suffix}
                className='text-4xl xl:text-6xl font-extrabold'
              />
              <p
                className={`${item.name.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
