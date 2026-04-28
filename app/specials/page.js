import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Image from 'next/image';
import { FaFire, FaClock, FaTag, FaCheckCircle, FaShoppingCart } from 'react-icons/fa';

export const metadata = {
  title: 'Specials & Offers | MirpurXpress',
  description: 'Check out our limited-time specials, combo deals, and exclusive discounts. Save big on your favorite Bangladeshi dishes today!',
  keywords: ['restaurant specials', 'food deals', 'combo offers', 'biryani combo', 'discounted meals', 'Dhaka food offers'],
  openGraph: {
    title: 'Specials & Offers | MirpurXpress',
    description: 'Grab these limited-time deals before they are gone! Exclusive combos and discounts on authentic Bangladeshi food.',
    url: 'https://mirpurxpress.com/specials',
    images: [
      {
        url: '/assets/bannerimages/front-view-tasty-vegetable-salad-light-grey-table-health-meal-color-food-free-place.jpg',
        width: 1200,
        height: 630,
        alt: 'MirpurXpress Special Offers',
      },
    ],
  },
};

export default function Specials() {
  const specials = [
    {
      id: 1,
      title: 'BIRYANI FEAST COMBO',
      description: 'Perfect for 2 persons. Includes: Chicken Biryani + Raita + Salad + 2 Soft Drinks.',
      price: 650,
      originalPrice: 850,
      image: '/assets/bannerimages/front-view-tasty-vegetable-salad-light-grey-table-health-meal-color-food-free-place.jpg',
      badge: 'Best Seller',
      discount: '25% OFF',
      featured: true
    },
    {
      id: 2,
      title: 'FAMILY PACK DELUXE',
      description: 'Perfect for family gatherings. Includes: 4 Biryanis, 4 Curries, 4 Parathas, 4 Drinks + FREE Dessert.',
      price: 2400,
      originalPrice: 3200,
      image: '/assets/bannerimages/turkish-stuffed-eggplants-with-ground-beef-vegetables-baked-with-tomato-sauce.jpg',
      badge: 'Family Special',
      discount: '25% OFF',
      featured: true
    },
    {
      id: 3,
      title: 'LUNCH THALI SPECIAL',
      description: 'Complete nutritious lunch with 2 curries, dal, rice, roti, salad, and pickle. Available 11 AM - 3 PM.',
      price: 220,
      originalPrice: 280,
      image: '/assets/item1.png',
      badge: 'Weekday Offer',
      discount: '20% OFF',
      featured: false
    },
    {
      id: 4,
      title: 'STUDENT COMBO',
      description: 'Budget-friendly combo. Includes: 1 Chicken/Fish item + Rice + 1 Paratha + Drink.',
      price: 180,
      originalPrice: 240,
      image: '/assets/item2.png',
      badge: 'Student Deal',
      discount: '25% OFF',
      featured: false
    },
    {
      id: 5,
      title: 'COUPLE DATE PACK',
      description: 'Romantic dinner for two. Includes: 2 Biryanis + 2 Grills + 2 Drinks + Ice Cream.',
      price: 1200,
      originalPrice: 1600,
      image: '/assets/item3.png',
      badge: 'Romantic',
      discount: '25% OFF',
      featured: false
    },
    {
      id: 6,
      title: 'BREAKFAST POWER MEAL',
      description: 'Energizing breakfast combo with paratha, egg bhuna, dal, and tea. Available 6 AM - 10 AM.',
      price: 120,
      originalPrice: 160,
      image: '/assets/restaurant.png',
      badge: 'Morning Special',
      discount: '25% OFF',
      featured: false
    }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Header />
      <section className={styles.specialsSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.badgeWrapper}>
              <FaFire className={styles.badgeIcon} />
              <p className={styles.subTitle}>Limited Time Offers</p>
            </div>
            <h1 className={styles.title}>OUR <span className={styles.highlight}>SPECIALS</span></h1>
            <p className={styles.description}>বিশেষ ডিসকাউন্ট এবং এক্সক্লুসিভ কম্বো। সঠিক সময় সঠিক খাবার! Grab these deals before they are gone.</p>
          </div>

          <div className={styles.featuredBanner}>
            <div className={styles.featuredItem}>
              <div className={styles.featuredBadge}>FLASH DEAL</div>
              <div className={styles.featuredContent}>
                <h3>TONIGHT ONLY</h3>
                <p>Get extra 10% off on all combos ordered after 8 PM</p>
                <div className={styles.timer}>
                  <span>02</span>:<span>45</span>:<span>30</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.specialsGrid}>
            {specials.map((item) => (
              <div key={item.id} className={`${styles.card} ${item.featured ? styles.featuredCard : ''}`}>
                {item.featured && <div className={styles.featuredTag}>FEATURED</div>}
                
                <div className={styles.imageWrapper}>
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className={styles.cardImage}
                  />
                  <div className={styles.badgeOverlay}>
                    <FaTag className={styles.badgeIconSmall} />
                    <span>{item.discount}</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>

                  <div className={styles.priceRow}>
                    <div className={styles.priceInfo}>
                      <span className={styles.currentPrice}>৳ {item.price}</span>
                      <span className={styles.originalPrice}>৳ {item.originalPrice}</span>
                    </div>
                    <div className={styles.offerBadge}>
                      <FaFire />
                      <span>{item.discount}</span>
                    </div>
                  </div>

                  <button className={styles.orderBtn}>
                    <FaShoppingCart /> Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.terms}>
            <p>⚡ * Kimchi and rice are included with all combo deals. Offer valid until further notice. Terms and conditions apply.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
