import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PromoSlider from '@/components/PromoSlider';
import Features from '@/components/Features';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Hungry from '@/components/Hungry';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'MirpurXpress - Authentic Bangladeshi Food in Dhaka',
  description: 'Experience the best Bangladeshi food at MirpurXpress, Mirpur, Dhaka. Fresh, hygienic, and authentic taste like home. Order online or visit us!',
  keywords: ['Bangladeshi restaurant', 'biryani Dhaka', 'Mirpur food', 'home delivery', 'authentic cuisine', 'best Bangladeshi food'],
  openGraph: {
    title: 'MirpurXpress - Authentic Bangladeshi Food',
    description: 'Fresh, hygienic, and authentic Bangladeshi cuisine in Mirpur, Dhaka. Order now for home delivery!',
    url: 'https://mirpurxpress.com',
    type: 'website',
    images: [
      {
        url: '/assets/hero.png',
        width: 1200,
        height: 630,
        alt: 'MirpurXpress - Authentic Bangladeshi Food',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MirpurXpress - Authentic Bangladeshi Food',
    description: 'Fresh, hygienic, and authentic Bangladeshi cuisine in Mirpur, Dhaka.',
    images: ['/assets/hero.png'],
  },
};

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
