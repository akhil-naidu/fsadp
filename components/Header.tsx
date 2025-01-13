'use client';

import Image from 'next/image';
import { MobileNav } from './MobileNav';
import Link from 'next/link';
import { RainbowButton } from './ui/rainbow-button';

export function Header() {
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-sm border-b border-purple-600/20'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image
              src='/logo.png'
              alt='FSADP Logo'
              width={40}
              height={40}
              className='w-10 h-10'
            />
            <span className='text-white font-bold text-xl'>FSADP</span>
          </div>
        </Link>

        <div className='hidden md:flex items-center gap-6'>
          <a
            href='#'
            className='text-purple-600 hover:text-orange-500 transition-colors'
          >
            Fullstack Roadmap
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-orange-500 transition-colors'
          >
            Bootcamps
          </a>
          <a
            href='#'
            className='text-gray-300 hover:text-orange-500 transition-colors'
          >
            Live Classes
          </a>

          <RainbowButton className=''>Join the Community</RainbowButton>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
