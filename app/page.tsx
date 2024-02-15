'use client';
import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import MainSection from '@/components/main-section/main-section';
import Offer from '@/components/offer/offer';
import Wrapper from '@/components/wrapper';

export default function Home() {
  return (
    <main className=''>
      <MainSection />
      <div className='relative'>
        <div className='w-full h-[22px]  bottom-0 gradient-background absolute ' />
      </div>

      <About />
      <Offer />
      <Contact />
    </main>
  );
}
