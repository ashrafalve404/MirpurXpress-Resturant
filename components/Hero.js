import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { HiLocationMarker } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Image 
              src="/assets/icon/splash.png" 
              alt="MirpurXpress Logo Icon" 
              width={25} 
              height={25} 
              priority
            />
            <span className={styles.bengali}>খাঁটি স্বাদ, ঘরের মতো খাবার</span>
          </div>
          
          <h1 className={styles.title}>
            ALL TIME <br />
            <span className={styles.highlight}>BANGLADESHI</span> <br />
            FOOD
          </h1>
          
          <p className={styles.description}>
            বাংলাদেশের ঐতিহ্যবাহী সব ধরনের মজাদার খাবার নিয়ে <br />
            আমরা আছি আপনার সাথে, মিরপুর, ঢাকা।
          </p>
          
          <div className={styles.actions}>
            <Link href="/menu" className={styles.btnPrimary}>View Menu</Link>
            <Link href="/contact" className={styles.btnSecondary}>Order Now</Link>
          </div>
          
          <div className={styles.location}>
            <span className={styles.locIcon}><HiLocationMarker /></span>
            <span>Mirpur, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
      
      <div className={styles.curve}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.05,115.3,115.45,115.3,173,101.12,231,86.83,281.33,65.34,321.39,56.44Z" className={styles.curveFill}></path>
        </svg>
      </div>
    </section>
  );
}
