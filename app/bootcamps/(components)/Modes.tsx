import { Button } from '@/components/ui/button';
import { MagicCard } from '@/components/ui/magic-card';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { RainbowButton } from '@/components/ui/rainbow-button';
import React from 'react';

const BootcampModes = () => {
  return (
    <div className='flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row mt-20 mb-20'>
      <MagicCard
        className='cursor-pointer justify-center  bg-purple-600/50 '
        gradientColor='purple'
        gradientOpacity={0.4}
      >
        <div className='pt-4 '>
          <div className='flex flex-col gap-4 '>
            <span className=' text-gray-300 text-4xl font-bold'>
              On Premise Bootcamps
            </span>
            <div className='text-gray-300/70'>
              <p className='max-w-md'>
                Hands-on learning directly to your campus. Students benefit from
                face-to-face interaction with expert mentors, allowing for
                personalized guidance and real-time problem-solving.With access
                to physical resources and infrastructure, on-premise bootcamps
                create a highly engaging and productive learning atmosphere
              </p>
            </div>
            {/* <div className='flex flex-row-reverse'>
              <RainbowButton>Contact us</RainbowButton>
            </div> */}
          </div>
        </div>
      </MagicCard>

      <MagicCard
        className='cursor-pointer justify-center bg-pink-600/50'
        gradientColor='pink'
        gradientOpacity={0.1}
      >
        <div className='pt-4'>
          <div className='flex flex-col gap-4 '>
            <span className=' text-gray-300 text-4xl font-bold'>
              Online Bootcamps
            </span>
            <div className='text-gray-300/70'>
              <p className='max-w-md'>
                The virtual classroom experience includes interactive live
                coding sessions, group projects, and access to recorded sessions
                and resources for lifetime learning. This format ensures
                students receive the same quality of education while enjoying
                the benefits of learning at their own pace and from the comfort
                of their homes.
              </p>
            </div>
          </div>
        </div>
      </MagicCard>
    </div>
  );
};

export default BootcampModes;
