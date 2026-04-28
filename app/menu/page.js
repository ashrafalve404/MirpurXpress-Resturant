import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Menu | MirpurXpress',
  description: 'Explore our complete menu of authentic Bangladeshi dishes. Biryani, curries, naan, desserts, and more. Fresh ingredients, traditional recipes.',
  keywords: ['Bangladeshi menu', 'biryani Dhaka', 'restaurant menu', 'traditional food', 'Bangladeshi dishes'],
  openGraph: {
    title: 'Our Menu | MirpurXpress',
    description: 'Browse our extensive menu of authentic Bangladeshi cuisine prepared with love and tradition.',
    url: 'https://mirpurxpress.com/menu',
    images: [
      {
        url: '/assets/item1.png',
        width: 1200,
        height: 630,
        alt: 'MirpurXpress Menu Items',
      },
    ],
  },
};

export default function MenuPage() {
  return (
    <main>
      <Header />
      <Menu showAll={true} />
      <Footer />
    </main>
  );
}
