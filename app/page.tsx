import About from '@/components/about/about';
import Contact from '@/components/contact/contact';
import MainSection from '@/components/main-section/main-section';
import Offer from '@/components/offer/offer';

export default function Home() {
  return (
    <main className=' relative '>
      <MainSection />
      <About />
      <Offer />
      <Contact />
    </main>
  );
}
