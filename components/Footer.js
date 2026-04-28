import styles from './Footer.module.css';
import Link from 'next/link';

import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🥘</span>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>MirpurXpress</span>
                <span className={styles.logoSub}>Bangladeshi Food</span>
              </div>
            </div>
            <p className={styles.descriptionBn}>
              আমাদের মূলনীতি খাঁটি স্বাদ ও মানসম্মত <br />
              বাংলাদেশি খাবার, প্রতিদিন, সবার জন্য।
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com/mirpurxpress" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/mirpurxpress" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/8801612345678" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://youtube.com/@mirpurxpress" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://tiktok.com/@mirpurxpress" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="TikTok">
                <SiTiktok />
              </a>
            </div>
          </div>
          
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/specials">Specials</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h3>Contact Info</h3>
            <ul className={styles.contactList}>
              <li>
                <HiOutlineLocationMarker className={styles.contactIcon} aria-hidden="true" />
                <span>Mirpur, Dhaka, Bangladesh</span>
              </li>
              <li>
                <HiOutlinePhone className={styles.contactIcon} aria-hidden="true" />
                <a href="tel:+8801612345678">01612-345678</a>
              </li>
              <li>
                <HiOutlineMail className={styles.contactIcon} aria-hidden="true" />
                <a href="mailto:info@mirpurxpress.com">info@mirpurxpress.com</a>
              </li>
              <li>
                <HiOutlineClock className={styles.contactIcon} aria-hidden="true" />
                <span>Daily: 10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© {currentYear} MirpurXpress. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
