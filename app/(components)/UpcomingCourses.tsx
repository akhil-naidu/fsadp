'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';

const UpcomingCourses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState('');
  const [currentTheme, setCurrentTheme] = useState('');
  const [courses, setCourses] = useState([]);
  const dummyArray = new Array(3).fill(0);

  const { toast } = useToast();

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'xc-token': 'htpvelYjigi2_-z5URhWOvWGB-swfTRmjMU3hQnY',
  //   },
  // };

  const incrementWaitlistById = (courseArray: any, courseId: any): [] => {
    return courseArray.map((item: any) => {
      if (item.Id === courseId) {
        return { ...item, waitlists: item.waitlists + 1 };
      }
      return item;
    });
  };

  const getCourseNameById = (courseArray: any, courseId: any) => {
    const courseDetail = courseArray.find(
      (course: any) => course.Id === courseId,
    );
    return courseDetail.name;
  };

  const addToWaitlist = async () => {
    const response = await fetch(
      'https://app.nocodb.com/api/v2/tables/m42aqn6tv0omq80/records',
      {
        method: 'POST',
        headers: {
          'xc-token': 'htpvelYjigi2_-z5URhWOvWGB-swfTRmjMU3hQnY',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      },
    );

    const { Id: wishlistId } = await response.json();

    await fetch(
      `https://app.nocodb.com/api/v2/tables/m42aqn6tv0omq80/links/c0dv16pmixti3v0/records/${wishlistId}`,
      {
        method: 'POST',
        headers: {
          'xc-token': 'htpvelYjigi2_-z5URhWOvWGB-swfTRmjMU3hQnY',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Id: courseId }),
      },
    );

    const newCourses = incrementWaitlistById(courses, courseId);
    setCourses([...newCourses]);

    const courseName = getCourseNameById(courses, courseId);

    toast({
      title: 'Enrolled Successfully',
      description: `Congratulations, ${name}! You have successfully enrolled in the ${courseName} course.`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToWaitlist();
    // Here you would typically send the data to your server
    setIsOpen(false);
    // Reset form fields
    setName('');
    setEmail('');
    setCourseId('');
    setCurrentTheme('');
  };

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetch(
        'https://app.nocodb.com/api/v2/tables/mky9sjltxsqgm5z/records?offset=0&limit=25&where=&viewId=vwkvl0v76zqquko8',
        {
          method: 'GET',
          headers: {
            'xc-token': 'htpvelYjigi2_-z5URhWOvWGB-swfTRmjMU3hQnY',
          },
        },
      );

      const data = await response.json();
      setCourses(data.list);

      return data;
    };

    getCourses();
  }, []);

  return (
    <div className="pb-20">
      <h1 className="text-4xl md:text-3xl font-bold text-white font-outfit pb-4">
        Upcoming Courses
      </h1>

      {courses.length === 0 ? (
        <div className="flex gap-8 flex-wrap justify-center pt-8 ">
          {dummyArray.map((val, index) => {
            return (
              <div className="flex flex-col space-y-3 lg:w-96" key={index}>
                <Skeleton className="h-[300px]  rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 " />
                  <Skeleton className="h-4 " />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex gap-8 flex-wrap justify-center transition ease-in delay-10000">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {courses.map(
              ({ Id, name, description, image, waitlists, color }) => {
                return (
                  <CardContainer className="inter-var py-2 w-96" key={Id}>
                    <CardBody
                      className={`bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-${color}-600/60 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  `}
                    >
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src={image}
                          height="1000"
                          width="1000"
                          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-4">
                        <CardItem
                          translateZ={20}
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          {waitlists} enrolled
                        </CardItem>
                        <DialogTrigger
                          asChild
                          onClick={() => {
                            setCurrentTheme(`theme-${color}`);
                            setCourseId(Id);
                          }}
                        >
                          <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                          >
                            Join Waitlist
                          </CardItem>
                        </DialogTrigger>
                      </div>
                    </CardBody>
                  </CardContainer>
                );
              },
            )}

            {/* <CardContainer className='inter-var py-2 w-96'>
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
                Learn the fundamentals of web development with no prior
                knowledge on coding/programming
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
                <DialogTrigger
                  asChild
                  onClick={() => {
                    setCurrentTheme('theme-orange');
                    setCourse('HTML and CSS');
                  }}
                >
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                  >
                    Join Waitlist
                  </CardItem>
                </DialogTrigger>
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
                Knowing JavaScript can help creating projects for mobile,
                desktop, web, frontend, backend and AI.
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
                <DialogTrigger
                  asChild
                  onClick={() => {
                    setCurrentTheme('theme-yellow');
                    setCourse('Javascript');
                  }}
                >
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                  >
                    Join Waitlist
                  </CardItem>
                </DialogTrigger>
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
                <DialogTrigger
                  asChild
                  onClick={() => {
                    setCurrentTheme('theme-blue');
                    setCourse('ReactJS');
                  }}
                >
                  <CardItem
                    translateZ={20}
                    as='button'
                    className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                  >
                    Join Waitlist
                  </CardItem>
                </DialogTrigger>
              </div>
            </CardBody>
          </CardContainer> */}

            <DialogContent className={`sm:max-w-[425px] ${currentTheme}`}>
              <DialogHeader>
                <DialogTitle>Enter Your Details</DialogTitle>
                <DialogDescription>
                  Please provide your name and email address.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default UpcomingCourses;
