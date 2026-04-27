import styles from './About.module.css';
import Image from 'next/image';
import { HiOutlineClock, HiOutlineEmojiHappy, HiOutlineStar, HiOutlineBookOpen } from 'react-icons/hi';
import { IoFastFoodOutline } from 'react-icons/io5';

export default function About() {
  const stats = [
    { label: 'Years of Service', value: '10+', icon: <HiOutlineClock /> },
    { label: 'Food Items', value: '50+', icon: <IoFastFoodOutline /> },
    { label: 'Happy Customers', value: '5000+', icon: <HiOutlineEmojiHappy /> },
    { label: 'Customer Rating', value: '4.8', icon: <HiOutlineStar /> },
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.content}>
            <p className={styles.subTitle}>About Us</p>
            <h2 className={styles.title}>WE SERVE THE BEST <br /> <span className={styles.highlight}>BANGLADESHI FOOD</span></h2>
            <p className={styles.descriptionBn}>
              Mirpur Bangladeshi Food এ আমরা প্রতিটি খাবার প্রস্তুত করি নিয়ে <br />
              অতি গুরুত্ব ও মানসম্মত খাবার। আমাদের লক্ষ্য হলো আপনাদের <br />
              সেরা স্বাদ ও সেবার মাধ্যমে সন্তুষ্ট করা।
            </p>
            
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> অভিজ্ঞ শেফ দ্বারা প্রস্তুত
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> পরিষ্কার ও আরামদায়ক পরিবেশ
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> সুলভ মূল্য, সেরা মান
              </li>
            </ul>
            
            <div className={styles.signature}>
              <div className={styles.sigLine}>Mirpur Team</div>
            </div>
          </div>
          
          <div className={styles.imageWrapper}>
            <Image 
              src="/assets/restaurant.png" 
              alt="Restaurant Interior" 
              width={500} 
              height={400} 
              className={styles.aboutImage}
              style={{ height: 'auto' }}
            />
          </div>
        </div>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
