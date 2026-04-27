import styles from './Features.module.css';
import { MdOutlineCleanHands, MdOutlineRestaurantMenu, MdOutlineDeliveryDining } from 'react-icons/md';
import { BiLeaf } from 'react-icons/bi';
import { HiOutlineUsers } from 'react-icons/hi';

export default function Features() {
  const features = [
    { icon: <MdOutlineCleanHands />, title: 'Fresh & Hygienic', desc: 'আমাদের সব খাবার তাজা ও পরিচ্ছন্ন পরিবেশে তৈরি' },
    { icon: <BiLeaf />, title: 'Authentic Taste', desc: 'ঘরের মত আসল বাংলাদেশি স্বাদ' },
    { icon: <MdOutlineRestaurantMenu />, title: 'Quality Ingredients', desc: 'সেরা মানের উপকরণ ব্যবহার' },
    { icon: <MdOutlineDeliveryDining />, title: 'Fast Delivery', desc: 'দ্রুত ও নির্ভরযোগ্য হোম ডেলিভারি' },
    { icon: <HiOutlineUsers />, title: 'Family Friendly', desc: 'পরিবার ও বন্ধুদের জন্য সেরা জায়গা' }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{item.icon}</span>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.descBn}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
