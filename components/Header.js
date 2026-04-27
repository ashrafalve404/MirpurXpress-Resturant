"use client";
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { HiOutlinePhone, HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>🥘</div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>MirpurXpress</span>
            <span className={styles.logoSub}>Bangladeshi Food</span>
          </div>
        </div>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="#home" onClick={closeMobileMenu}>Home</Link>
          <Link href="#about" onClick={closeMobileMenu}>About Us</Link>
          <Link href="#menu" onClick={closeMobileMenu}>Menu</Link>
          <Link href="#specials" onClick={closeMobileMenu}>Specials</Link>
          <Link href="#gallery" onClick={closeMobileMenu}>Gallery</Link>
          <Link href="#reviews" onClick={closeMobileMenu}>Reviews</Link>
          <Link href="#contact" onClick={closeMobileMenu}>Contact</Link>
        </nav>
        
        <div className={styles.contact}>
          <button className={styles.phoneBtn}>
            <span className={styles.phoneIcon}><HiOutlinePhone /></span>
            <span className={styles.phoneText}>01612-345678</span>
          </button>
          
          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
