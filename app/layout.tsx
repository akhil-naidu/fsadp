import { Outfit } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <div className='flex flex-col min-h-screen bg-gray-900'>
          <Header />
          <main className='flex-grow flex'>
            <div className='container mx-auto px-4 flex items-center justify-center'>
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <BackgroundBeams />
      </body>
    </html>
  );
}
