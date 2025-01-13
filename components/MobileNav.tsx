import { useState } from 'react';
import { RainbowButton } from './ui/rainbow-button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <button
        className='text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md'
        onClick={() => setIsOpen(!isOpen)}
        aria-label='Toggle menu'
      >
        {isOpen ? (
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div className='absolute top-full left-0 right-0 bg-gray-900 border-b border-purple-600/20 py-2'>
          <div className='container mx-auto px-4 flex flex-col gap-2'>
            <a
              href='#'
              className='text-purple-600 hover:text-orange-500 transition-colors py-2'
            >
              Fullstack Roadmap
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-orange-500 transition-colors py-2'
            >
              Bootcamps
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-orange-500 transition-colors py-2'
            >
              Live Classes
            </a>

            <RainbowButton className='max-w-fit'>
              Join the Community
            </RainbowButton>
          </div>
        </div>
      )}
    </div>
  );
}
