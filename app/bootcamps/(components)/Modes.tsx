import { MagicCard } from '@/components/ui/magic-card';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import React from 'react';

const BootcampModes = () => {
  return (
    <div className='flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row mt-20 mb-20'>
      <MagicCard
        className='cursor-pointer justify-center bg-purple-400/50'
        gradientColor='purple'
        gradientOpacity={0.8}
      >
        <div className='pt-4'>
          <span className=' text-gray-300 text-4xl font-bold'>
            On Premise Bootcamps
          </span>
        </div>
      </MagicCard>

      <MagicCard
        className='cursor-pointer justify-center bg-pink-400/50'
        gradientColor='orange'
        gradientOpacity={0.8}
      >
        <div className='pt-4'>
          <span className=' text-gray-300 text-4xl font-bold'>
            Online Bootcamps
          </span>
        </div>
      </MagicCard>
    </div>
  );
};

export default BootcampModes;
