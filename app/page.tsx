import About from '@/components/about/about';
import MainSection from '@/components/main-section/main-section';

export default function Home() {
  return (
    <main className='h-[10000px]  relative '>
      <MainSection />
      <About />
    </main>
  );
}
