import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PromoSlider from '@/components/PromoSlider';
import Features from '@/components/Features';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Hungry from '@/components/Hungry';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PromoSlider />
      <Features />
      <Menu />
      <About />
      <Hungry />
      <Footer />
    </main>
  );
}
