import styles from './Hungry.module.css';
import Image from 'next/image';
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';

export default function Hungry() {
  return (
    <section className={styles.hungry}>
      <div className={styles.container}>
        <div className={styles.imageBox}>
            <Image 
              src="/assets/delivery.png" 
              alt="Delivery Rider" 
              width={500} 
              height={400} 
              className={styles.riderImage}
              style={{ height: 'auto' }}
            />
        </div>
        
        <div className={styles.content}>
          <p className={styles.subTitle}>HUNGRY?</p>
          <h2 className={styles.title}>WE <span className={styles.highlight}>DELIVER</span> YOUR FAVOURITE FOOD!</h2>
          <p className={styles.descriptionBn}>মিরপুরের যেকোনো জায়গায় দ্রুত ডেলিভারি।</p>
          
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.icon}><HiOutlineLocationMarker /></span>
              <span>Mirpur, Dhaka</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}><HiOutlinePhone /></span>
              <span>01612-345678</span>
            </div>
          </div>
          
          <button className={styles.orderBtn}>Order Now ➔</button>
        </div>
      </div>
    </section>
  );
}
