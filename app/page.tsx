import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900'>
      <Header />
      <main className='flex-grow flex items-center'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-12 py-8'>
            <Hero />
            <TestimonialCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
