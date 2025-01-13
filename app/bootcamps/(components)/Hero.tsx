import React from 'react';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';

const BootcampHero = () => {
  return (
    <div className='z-10 flex flex-col gap-8 min-h-64 items-center justify-center mt-40'>
      <AnimatedGradientText>
        🎉 <hr className='mx-2 h-4 w-px shrink-0 bg-gray-300' />{' '}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Invite us to your College
        </span>
        <ChevronRight className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-gray-300' />
      </AnimatedGradientText>
      <h1 className='text-4xl md:text-6xl font-bold text-white font-outfit max-w-4xl text-center'>
        Empower{' '}
        <span className='bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x'>
          Your Campus with
        </span>
        <br />
        Future-Ready Skills.{' '}
        <span className='bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x'>
          Register Your College Today
        </span>
      </h1>
      <p className='text-gray-400 text-lg md:text-xl text-center max-w-5xl'>
        Designed to equip students with cutting-edge knowledge and practical
        expertise, our bootcamps bridge the gap between academics and the real
        world. With hands-on projects, mentorship from industry experts, and an
        engaging curriculum, we prepare students for a thriving career in
        technology and beyond.
      </p>
    </div>
  );
};

export default BootcampHero;
