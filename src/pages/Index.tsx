import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Locations from '@/components/Locations';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Locations />
      <Reviews />
      <Contact />
    </main>
  );
};

export default Index;
