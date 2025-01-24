'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
// import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <div className="flex-1 space-y-6 lg:max-w-[50%]">
      <h1 className="text-4xl md:text-6xl font-bold text-white font-outfit">
        Master{' '}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
          Fullstack Application
        </span>
        <br />
        Development{' '}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
          Programme
        </span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl">
        Transform your career with our comprehensive fullstack development
        program. Learn by building real-world applications.
      </p>
      <div className="relative flex flex-col sm:flex-row gap-4 z-10">
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-600/90 text-white px-8 py-6 text-lg rounded-xl"
          // asChild
        >
          <Link href="https://learn.fsadp.com" passHref target="_blank">
            Start Learning →
          </Link>
        </Button>

        {/* <Button
          size='lg'
          variant='secondary'
          className='bg-orange-500 hover:bg-orange-500/90 text-white px-8 py-6 text-lg rounded-xl border-2 border-orange-500'
        >
          View Curriculum →
        </Button> */}
      </div>
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={1}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-[-25%] inset-y-[5%] h-[80%] skew-y-12',
        )}
      /> */}
    </div>
  );
}
