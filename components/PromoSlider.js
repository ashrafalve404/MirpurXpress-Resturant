'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PromoSlider.module.css';

const slides = [
  {
    id: 1,
    image: '/assets/bannerimages/front-view-tasty-vegetable-salad-light-grey-table-health-meal-color-food-free-place.jpg',
    badge: 'Limited Time Offer',
    title: 'Fresh Veggie Platter',
    description: 'আমাদের স্পেশাল ভেজিটেবল সালাদ প্ল্যাটারে পাচ্ছেন ২০% ডিসকাউন্ট! স্বাস্থ্যকর এবং সুস্বাদু খাবার এখন আরও সাশ্রয়ী।',
    offer: '20% OFF'
  },
  {
    id: 2,
    image: '/assets/bannerimages/turkish-stuffed-eggplants-with-ground-beef-vegetables-baked-with-tomato-sauce.jpg',
    badge: 'Chef\'s Special',
    title: 'Turkish Beef Delight',
    description: 'টার্কিশ স্টাইল স্টাফড এগপ্ল্যান্ট উইথ বিফ - একটি রাজকীয় খাবারের স্বাদ নitez today order.',
    offer: 'BUY 1 GET 1'
  }
];

export default function PromoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);
  const intervalRef = useRef(null);

  // Keep ref in sync with state
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []); // Only set interval once on mount

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className={styles.promoSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional offers slider"
    >
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${index === currentSlide ? styles.slideActive : ''}`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={styles.image}
                priority={index === 0}
                sizes="100vw"
                quality={85}
              />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <span className={styles.badge}>{slide.badge}</span>
                <h2 className={styles.title}>
                  {slide.title} <br />
                  <span style={{ color: 'var(--primary)' }}>{slide.offer}</span>
                </h2>
                <p className={styles.description}>{slide.description}</p>
                <button className={styles.btn}>Order Now</button>
              </div>
            </div>
          ))}

          <div className={styles.dots} role="tablist" aria-label="Slide navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
