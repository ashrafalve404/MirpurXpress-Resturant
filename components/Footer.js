import styles from './Footer.module.css';

import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
              <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
              <a href="#" className={styles.socialIcon}><FaInstagram /></a>
              <a href="#" className={styles.socialIcon}><FaWhatsapp /></a>
              <a href="#" className={styles.socialIcon}><FaYoutube /></a>
              <a href="#" className={styles.socialIcon}><SiTiktok /></a>
            </div>
          </div>
          
          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Specials</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
          

          
          <div className={styles.contact}>
            <h3>Contact Info</h3>
            <ul className={styles.contactList}>
              <li><HiOutlineLocationMarker className={styles.contactIcon} /> Mirpur, Dhaka, Bangladesh</li>
              <li><HiOutlinePhone className={styles.contactIcon} /> 01612-345678</li>
              <li><HiOutlineMail className={styles.contactIcon} /> info@mirpurxpress.com</li>
              <li><HiOutlineClock className={styles.contactIcon} /> Daily: 10:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2024 MirpurXpress. All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
}
