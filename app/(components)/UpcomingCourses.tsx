'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';

const UpcomingCourses = () => {
  return (
    <div className='pb-20'>
      <h1 className='text-4xl md:text-3xl font-bold text-white font-outfit pb-4'>
        Upcoming Courses
      </h1>
      <div className='flex gap-8 flex-wrap'>
        <CardContainer className='inter-var py-2 w-96'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-orange-600/60 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              HTML and CSS
            </CardItem>
            <CardItem
              as='p'
              translateZ='60'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              Learn the fundamentals of web development with no prior knowledge
              on coding/programming
            </CardItem>
            <CardItem translateZ='100' className='w-full mt-4'>
              <Image
                src='https://media.licdn.com/dms/image/v2/D5612AQFUoLFb-paGEQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1711350739136?e=2147483647&v=beta&t=sBRHkg6ymBKfzIjwRuqSTgZJxzJz-x-sSHMc5BH6oHg'
                height='1000'
                width='1000'
                className='h-full w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-4'>
              <CardItem
                translateZ={20}
                className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
              >
                119 enrolled +
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Join Waitlist
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className='inter-var py-2 w-96'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-yellow-600/60 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              Javascript
            </CardItem>
            <CardItem
              as='p'
              translateZ='60'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              Knowing JavaScript can help creating projects for mobile, desktop,
              web, frontend, backend and AI.
            </CardItem>
            <CardItem translateZ='100' className='w-full mt-4'>
              <Image
                src='https://img-c.udemycdn.com/course/750x422/3442840_3033.jpg'
                height='1000'
                width='1000'
                className='h-full w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-4'>
              <CardItem
                translateZ={20}
                className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
              >
                119 enrolled +
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Join Waitlist
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className='inter-var py-2 w-96'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-blue-600/60 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem
              translateZ='50'
              className='text-xl font-bold text-neutral-600 dark:text-white'
            >
              React JS
            </CardItem>
            <CardItem
              as='p'
              translateZ='60'
              className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
            >
              The most beloved and powerful library of the decade, and when
              paired with Next.js, its possibilities are endless.
            </CardItem>
            <CardItem translateZ='100' className='w-full mt-4'>
              <Image
                src='https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18'
                height='1000'
                width='1000'
                className='h-full w-full object-cover rounded-xl group-hover/card:shadow-xl'
                alt='thumbnail'
              />
            </CardItem>
            <div className='flex justify-between items-center mt-4'>
              <CardItem
                translateZ={20}
                className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
              >
                119 enrolled +
              </CardItem>
              <CardItem
                translateZ={20}
                as='button'
                className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              >
                Join Waitlist
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default UpcomingCourses;
