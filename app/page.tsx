import { Hero } from '@/components/Hero';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-12 py-8'>
      <Hero />
      <TestimonialCard />
    </div>
  );
}
