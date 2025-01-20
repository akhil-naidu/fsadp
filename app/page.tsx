import { Hero } from '@/components/Hero';
import { TestimonialCard } from '@/components/TestimonialCard';
import UpcomingCourses from './(components)/UpcomingCourses';

export default function Home() {
  return (
    <div className='pt-12'>
      <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-12 py-32 '>
        <Hero />
        <TestimonialCard />
      </div>

      <UpcomingCourses />
    </div>
  );
}
