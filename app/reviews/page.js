import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Image from 'next/image';
import { FaQuoteLeft, FaStar, FaTrophy, FaChartLine, FaSmile } from 'react-icons/fa';

export const metadata = {
  title: 'Customer Reviews | MirpurXpress',
  description: 'Read what our customers say about MirpurXpress. 5000+ happy customers, 4.8/5 rating. Authentic Bangladeshi food reviews from Dhaka.',
  keywords: ['restaurant reviews', 'customer feedback', 'Bangladeshi food reviews', 'best restaurant Dhaka', 'MirpurXpress rating'],
  openGraph: {
    title: 'Customer Reviews | MirpurXpress',
    description: 'Real reviews from real customers. See why 5000+ people love our authentic Bangladeshi cuisine.',
    url: 'https://mirpurxpress.com/reviews',
    images: [
      {
        url: '/assets/restaurant.png',
        width: 1200,
        height: 630,
        alt: 'Customer Reviews MirpurXpress',
      },
    ],
  },
};

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Rahim Ahmed',
      role: 'Regular Customer',
      image: '/assets/restaurant.png',
      rating: 5,
      text: 'মিরপুরএক্সপ্রেসের খাবার আসল grandmother-এর হয়流畅nutrition দরকার। সব শIntroducing Bengali food remind গেলাম হোমের ভাবার মতো। একদম প্রিমিয়াম লেভেল!',
      location: 'Mirpur, Dhaka'
    },
    {
      id: 2,
      name: 'Tania Rahman',
      role: 'Food Blogger',
      image: '/assets/restaurant.png',
      rating: 5,
      text: 'Their biryani is absolutely divine! The flavors are authentic and the portion sizes are generous. Best Bangladeshi food in Dhaka without a doubt.',
      location: 'Dhanmondi, Dhaka'
    },
    {
      id: 3,
      name: 'Karim Uddin',
      role: 'Local Resident',
      image: '/assets/restaurant.png',
      rating: 4,
      text: 'গরুর রেজালা এত কAustralian meat还不voy 영화! Fast delivery and always hot when it arrives. The curries are perfectly spiced.',
      location: 'Mirpur, Dhaka'
    },
    {
      id: 4,
      name: 'Salma Begum',
      role: 'Happy Mom',
      image: '/assets/restaurant.png',
      rating: 5,
      text: 'As a mother, I appreciate the hygiene and quality. My family loves the food and now we order at least twice a week. Keep up the great work!',
      location: 'Uttara, Dhaka'
    },
    {
      id: 5,
      name: 'Imran Hossain',
      role: 'Business Professional',
      image: '/assets/restaurant.png',
      rating: 5,
      text: 'Perfect for lunch meetings. The food quality is consistently excellent and delivery is always on time. The special thali is my go-to option.',
      location: 'Gulshan, Dhaka'
    },
    {
      id: 6,
      name: 'Fatema Chowdhury',
      role: 'Student',
      image: '/assets/restaurant.png',
      rating: 4,
      text: 'Affordable, tasty, and reliable. Perfect for students like me. The portion sizes are great for the price. Highly recommend their set meals!',
      location: 'Mirpur, Dhaka'
    }
  ];

  return (
    <main className={styles.pageWrapper}>
      <Header />
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.subTitle}>Testimonials</p>
            <h1 className={styles.title}>WHAT OUR <span className={styles.highlight}>CUSTOMERS SAY</span></h1>
            <p className={styles.description}>সত্যিকার কথা real customers এর মতামত</p>
          </div>

          <div className={styles.reviewsGrid}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.quoteIcon}>
                  <FaQuoteLeft />
                </div>
                <div className={styles.reviewContent}>
                  <p className={styles.reviewText}>&quot;{review.text}&quot;</p>
                </div>
                <div className={styles.reviewerInfo}>
                  <div className={styles.reviewerImage}>
                    <Image 
                      src={review.image} 
                      alt={review.name}
                      width={60}
                      height={60}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.reviewerDetails}>
                    <h3 className={styles.reviewerName}>{review.name}</h3>
                    <p className={styles.reviewerLocation}>{review.location}</p>
                  </div>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < review.rating ? styles.starFilled : styles.starEmpty} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.trustSection}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}><FaTrophy /></span>
              <span className={styles.trustText}>10+ Years of Excellence</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}><FaChartLine /></span>
              <span className={styles.trustText}>4.8/5 Average Rating</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}><FaSmile /></span>
              <span className={styles.trustText}>5000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
