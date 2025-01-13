import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { NeonGradientCard } from './ui/neon-gradient-card';
import { ASSET_PREFIX } from '@/lib/constants';

export function TestimonialCard() {
  return (
    <NeonGradientCard className='max-w-xl'>
      <div className='rounded-xl text-card-foreground flex-1 p-6 bg-gradient-to-br from-gray-800 to-purple-900 text-white border border-purple-600/20 lg:flex lg:flex-col lg:justify-center lg:h-full shadow-xl'>
        <div className='flex items-start gap-4 mb-4'>
          <Image
            src={`${ASSET_PREFIX}rahul-varma.jpg`}
            alt='Student'
            width={60}
            height={60}
            className='rounded-full ring-2 ring-purple-600 ring-offset-2 ring-offset-gray-900'
          />
          <div>
            <h3 className='font-semibold'>Rahul Verma</h3>
            <p className='text-purple-600 font-medium'>
              Full Stack Developer @ Wipro
            </p>
            <div className='flex gap-1 mt-1'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-orange-500 text-orange-500'
                />
              ))}
            </div>
          </div>
        </div>
        <p className='text-gray-300'>
          &quot;FSADP&apos;s practical approach to learning fullstack
          development was exactly what I needed. The project-based curriculum
          and mentorship from Akhil sir helped me transition from a junior
          developer to a confident fullstack engineer.&quot;
        </p>
        <div className='mt-6'>
          <h4 className='font-semibold mb-2 text-purple-600'>
            Key Achievements:
          </h4>
          <ul className='list-disc list-inside text-gray-300 space-y-1 marker:text-orange-500'>
            <li>Built 6 production-ready applications</li>
            <li>Mastered the MERN stack ecosystem</li>
            <li>Learned system design principles</li>
            <li>Secured 12 LPA package at Wipro</li>
          </ul>
        </div>
      </div>
    </NeonGradientCard>
  );
}
