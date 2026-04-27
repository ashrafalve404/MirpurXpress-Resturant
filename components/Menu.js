import styles from './Menu.module.css';
import Image from 'next/image';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Menu() {
  const categories = [
    { id: 'all', label: 'সব', active: true },
    { id: 'rice', label: 'ভাতের আইটেম' },
    { id: 'biryani', label: 'বিরিয়ানি' },
    { id: 'naan', label: 'নান্দু' },
    { id: 'curry', label: 'ভারী' },
    { id: 'meat', label: 'মাংসের আইটেম' },
    { id: 'dal', label: 'ডাল ও সবজি' },
    { id: 'drinks', label: 'পানীয়' },
  ];

  const items = [
    { id: 1, name: 'কালা ভুনা সাথে ভাত', price: '৳ ২০০', image: '/assets/item1.png' },
    { id: 2, name: 'চিকেন বিরিয়ানি', price: '৳ ২২০', image: '/assets/item2.png' },
    { id: 3, name: 'পরোটা সেট', price: '৳ ১২০', image: '/assets/item3.png' },
    { id: 4, name: 'গরুর কষা মাংস', price: '৳ ২৫০', image: '/assets/item1.png' },
    { id: 5, name: 'ভাতের ভাত ভর্তা', price: '৳ ২৩০', image: '/assets/item2.png' },
    { id: 6, name: 'খাসির কাচ্চি বিরিয়ানি', price: '৳ ৩৫০', image: '/assets/item2.png' },
    { id: 7, name: 'বাটার নান রুটি', price: '৳ ৫০', image: '/assets/item3.png' },
    { id: 8, name: 'গরুর রেজালা', price: '৳ ২৮০', image: '/assets/item1.png' },
    { id: 9, name: 'স্পেশাল বোরহানি', price: '৳ ৬০', image: '/assets/item2.png' },
    { id: 10, name: 'রূপচাঁদা মাছ ফ্রাই', price: '৳ ৪০০', image: '/assets/item1.png' },
    { id: 11, name: 'ফুচকা চটপটি', price: '৳ ১০০', image: '/assets/item3.png' },
    { id: 12, name: 'টক দই ফুচকা', price: '৳ ১২০', image: '/assets/item2.png' },
  ];

  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subTitle}>Our Popular</p>
          <h2 className={styles.title}>EXPLORE <span className={styles.highlight}>OUR MENU</span></h2>
          <p className={styles.descriptionBn}>বাংলাদেশের সব জনপ্রিয় খাবার এক জায়গায়</p>
        </div>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button key={cat.id} className={`${styles.tab} ${cat.active ? styles.active : ''}`}>
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={300} 
                  height={220} 
                  className={styles.itemImage} 
                />
                <button className={styles.wishlistBtn}>
                  <FaHeart className={styles.heartIcon} />
                </button>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.price}>{item.price}</p>
                <button className={styles.orderBtn}>
                  <FaShoppingCart /> Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.viewAllBtn}>View Full Menu ➔</button>
        </div>
      </div>
    </section>
  );
}
