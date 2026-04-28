import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Image from 'next/image';
import { FaCamera, FaUtensils, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Gallery | MirpurXpress',
  description: 'Take a visual tour of MirpurXpress - our restaurant interior, delicious food, and happy moments. See why we are the top Bangladeshi restaurant in Dhaka.',
  keywords: ['restaurant gallery', 'food photos', 'Bangladeshi cuisine photos', 'Mirpur restaurant interior', 'Dhaka dining'],
  openGraph: {
    title: 'Gallery | MirpurXpress',
    description: 'Explore our restaurant through photos - ambiance, food, and customer experiences at MirpurXpress.',
    url: 'https://mirpurxpress.com/gallery',
    images: [
      {
        url: '/assets/restaurant.png',
        width: 1200,
        height: 630,
        alt: 'MirpurXpress Gallery',
      },
    ],
  },
};

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: '/assets/restaurant.png', alt: 'Restaurant Interior', category: 'Interior' },
    { id: 2, src: '/assets/item1.png', alt: 'Delicious Food Item 1', category: 'Food' },
    { id: 3, src: '/assets/item2.png', alt: 'Delicious Food Item 2', category: 'Food' },
    { id: 4, src: '/assets/item3.png', alt: 'Delicious Food Item 3', category: 'Food' },
    { id: 5, src: '/assets/hero.png', alt: 'Restaurant Ambiance', category: 'Interior' },
    { id: 6, src: '/assets/bannerimages/front-view-tasty-vegetable-salad-light-grey-table-health-meal-color-food-free-place.jpg', alt: 'Special Dish', category: 'Food' },
  ];

  const categories = ['All', 'Food', 'Interior', 'Events', 'Delivery'];

  return (
    <main className={styles.pageWrapper}>
      <Header />
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.subTitle}>Our Gallery</p>
            <h1 className={styles.title}>A GLIMPSE OF <span className={styles.highlight}>OUR RESTAURANT</span></h1>
            <p className={styles.description}>মিরpurExpress-এর সুন্দর মুহূর্ত এবং খাবার সমাহরণ</p>
          </div>

          <div className={styles.categories}>
            {categories.map((cat) => (
              <button key={cat} className={styles.categoryBtn}>
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.galleryGrid}>
            {galleryImages.map((img) => (
              <div key={img.id} className={`${styles.galleryItem} ${styles[`item${img.id}`]}`}>
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  fill
                  className={styles.galleryImage}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <FaCamera className={styles.icon} />
                    <span>{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.statsBanner}>
            <div className={styles.statItem}>
              <FaUtensils className={styles.statIcon} />
              <div>
                <h3>50+</h3>
                <p> Food Items</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaUsers className={styles.statIcon} />
              <div>
                <h3>5000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaMapMarkerAlt className={styles.statIcon} />
              <div>
                <h3>Mirpur</h3>
                <p>Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
