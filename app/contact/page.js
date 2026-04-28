import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export const metadata = {
  title: 'Contact Us | MirpurXpress',
  description: 'Contact MirpurXpress for orders, inquiries, or feedback. Call 01612-345678, email info@mirpurxpress.com. Visit us in Mirpur, Dhaka.',
  keywords: ['contact MirpurXpress', 'restaurant phone', 'order online', 'Bangladeshi food delivery', 'Mirpur Dhaka restaurant'],
  openGraph: {
    title: 'Contact Us | MirpurXpress',
    description: 'Get in touch with MirpurXpress. Order by phone, email, or visit our restaurant in Mirpur, Dhaka.',
    url: 'https://mirpurxpress.com/contact',
    images: [
      {
        url: '/assets/restaurant.png',
        width: 1200,
        height: 630,
        alt: 'MirpurXpress Contact',
      },
    ],
  },
};

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Phone',
    bengali: '০১৬২-৩৪৫৬৭৮',
    english: '+880 1612-345678',
    link: 'tel:+8801612345678'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    bengali: 'ইমেইল করুন:',
    english: 'info@mirpurxpress.com',
    link: 'mailto:info@mirpurxpress.com'
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    bengali: 'মিরপুর, ঢাকা, বাংলাদেশ',
    english: 'Mirpur, Dhaka, Bangladesh',
    link: null
  },
  {
    icon: FaClock,
    title: 'Opening Hours',
    bengali: 'সকাল ১০টা - রাত ১১টা',
    english: 'Daily: 10:00 AM - 11:00 PM',
    link: null
  }
];

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com/mirpurxpress', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/mirpurxpress', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/8801612345678', label: 'WhatsApp' },
  { icon: FaYoutube, href: 'https://youtube.com/@mirpurxpress', label: 'YouTube' },
  { icon: SiTiktok, href: 'https://tiktok.com/@mirpurxpress', label: 'TikTok' },
];

export default function Contact() {
  return (
    <main className={styles.pageWrapper}>
      <Header />
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.subTitle}>Get In Touch</p>
            <h1 className={styles.title}>CONTACT <span className={styles.highlight}>US</span></h1>
            <p className={styles.description}>আমাদের সাথে যোগাযোগ করুন যেকোনো প্রশ্ন বা অর্ডারের জন্য। আমরা ২৪/৭ আপনাকে সাহায্য করতে প্রস্তুত।</p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              {contactInfo.map((info, idx) => (
                <div className={styles.infoCard} key={idx}>
                  <div className={styles.iconBox}>
                    <info.icon className={styles.icon} />
                  </div>
                  <div>
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="bengali">{info.bengali}</a>
                    ) : (
                      <p className="bengali">{info.bengali}</p>
                    )}
                    <p>{info.english}</p>
                  </div>
                </div>
              ))}

              <div className={styles.socialLinks}>
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>

          <div className={styles.mapSection}>
            <div className={styles.mapFrame}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8975849210586!2d90.3716!3d23.8163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzQ0LjAiTiA5wrAwMyc1NS41Ilc!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MirpurXpress Location"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
