import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | MirpurXpress',
  description: 'Learn about MirpurXpress - our story, our commitment to authentic Bangladeshi food, and why we are the best restaurant in Mirpur, Dhaka.',
  keywords: ['about MirpurXpress', 'Bangladeshi restaurant story', 'Mirpur Dhaka restaurant', 'authentic Bangladeshi food'],
  openGraph: {
    title: 'About Us | MirpurXpress',
    description: 'Discover our passion for authentic Bangladeshi cuisine and 10+ years of serving delicious meals in Dhaka.',
    url: 'https://mirpurxpress.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <About />
      <Footer />
    </main>
  );
}
