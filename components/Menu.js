'use client';
import { useState, useMemo } from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

export default function Menu({ showAll = false }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'সব', icon: '🍽️' },
    { id: 'rice', label: 'ভাতের আইটেম', icon: '🍚' },
    { id: 'biryani', label: 'বিরিয়ানি', icon: '🍛' },
    { id: 'naan', label: 'নান্দু', icon: '🫓' },
    { id: 'curry', label: 'ভারী', icon: '🥘' },
    { id: 'meat', label: 'মাংসের আইটেম', icon: '🍗' },
    { id: 'dal', label: 'ডাল ও সবজি', icon: '🥗' },
    { id: 'drinks', label: 'পানীয়', icon: '🥤' },
  ];

  const items = [
    { 
      id: 1, 
      name: 'কালা ভুনা সাথে ভাত', 
      price: '৳ ২০০', 
      image: '/assets/item1.png',
      category: 'rice',
      description: 'Traditional black lentils cooked with rice',
      popular: true
    },
    { 
      id: 2, 
      name: 'চিকেন বিরিয়ানি', 
      price: '৳ ২২০', 
      image: '/assets/item2.png',
      category: 'biryani',
      description: 'Aromatic rice with spiced chicken',
      popular: true
    },
    { 
      id: 3, 
      name: 'পরোটা সেট', 
      price: '৳ ১২০', 
      image: '/assets/item3.png',
      category: 'naan',
      description: 'Flaky layered flatbread (4 pcs)',
      popular: false
    },
    { 
      id: 4, 
      name: 'গরুর কষা মাংস', 
      price: '৳ ২৫০', 
      image: '/assets/item1.png',
      category: 'meat',
      description: 'Spicy beef bhuna with aroma',
      popular: true
    },
    { 
      id: 5, 
      name: 'ভাতের ভাত ভর্তা', 
      price: '৳ ২৩০', 
      image: '/assets/item2.png',
      category: 'rice',
      description: 'Flattened rice with spices',
      popular: false
    },
    { 
      id: 6, 
      name: 'খাসির কাচ্চি বিরিয়ানি', 
      price: '৳ ৩৫০', 
      image: '/assets/item2.png',
      category: 'biryani',
      description: 'Premium mutton biryani recipe',
      popular: true
    },
    { 
      id: 7, 
      name: 'বাটার নান রুটি', 
      price: '৳ ৫০', 
      image: '/assets/item3.png',
      category: 'naan',
      description: 'Butter brushed naan bread',
      popular: false
    },
    { 
      id: 8, 
      name: 'গরুর রেজালা', 
      price: '৳ ২৮০', 
      image: '/assets/item1.png',
      category: 'meat',
      description: 'Tender beef rejala in rich gravy',
      popular: true
    },
    { 
      id: 9, 
      name: 'স্পেশাল বোরহানি', 
      price: '৳ ৬০', 
      image: '/assets/item2.png',
      category: 'drinks',
      description: 'Traditional sweet yogurt drink',
      popular: false
    },
    { 
      id: 10, 
      name: 'রূপচাঁদা মাছ ফ্রাই', 
      price: '৳ ৪০০', 
      image: '/assets/item1.png',
      category: 'meat',
      description: 'Crispy fried rupchanda fish',
      popular: true
    },
    { 
      id: 11, 
      name: 'ফুচকা চটপটি', 
      price: '৳ ১০০', 
      image: '/assets/item3.png',
      category: 'curry',
      description: 'Spicy street food fuchka',
      popular: true
    },
    { 
      id: 12, 
      name: 'টক দই ফুচকা', 
      price: '৳ ১২০', 
      image: '/assets/item2.png',
      category: 'curry',
      description: 'Tangy yogurt-filled fuchka',
      popular: false
    },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return items;
    }
    return items.filter(item => item.category === activeCategory);
  }, [activeCategory, items]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subTitle}>Our Popular</p>
          <h2 className={styles.title}>
            EXPLORE <span className={styles.highlight}>OUR MENU</span>
          </h2>
          <p className={styles.descriptionBn}>
            বাংলাদেশের সব জনপ্রিয় খাবার এক জায়গায়
          </p>
        </div>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
              aria-pressed={activeCategory === cat.id}
              aria-label={`Filter by ${cat.label}`}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.card} data-category={item.category}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.image} 
                  alt={`${item.name} - MirpurXpress Menu`}
                  width={300}
                  height={220}
                  className={styles.itemImage}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <button 
                  className={styles.wishlistBtn}
                  aria-label="Add to wishlist"
                  onClick={(e) => {
                    e.preventDefault();
                    // Future: implement wishlist functionality
                    console.log('Added to wishlist:', item.id);
                  }}
                >
                  <FaHeart className={styles.heartIcon} />
                </button>
                {item.popular && <div className={styles.popularBadge}>Popular</div>}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.price}>{item.price}</p>
                <button 
                  className={styles.orderBtn}
                  onClick={() => console.log('Order:', item.id)}
                  aria-label={`Order ${item.name}`}
                >
                  <FaShoppingCart /> Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className={styles.footer}>
            <Link href="/menu" className={styles.viewAllBtn}>
              View Full Menu ➔
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
