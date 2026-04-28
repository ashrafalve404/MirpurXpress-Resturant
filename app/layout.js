import "./globals.css";
import { Inter } from 'next/font/google';
import { Hind_Siliguri } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  variable: '--font-bengali',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://mirpurxpress.com'),
  title: {
    default: "MirpurXpress - Authentic Taste of Bangladesh",
    template: "%s | MirpurXpress"
  },
  description: "Experience the best Bangladeshi food at MirpurXpress, Dhaka. Fresh, hygienic, and authentic taste like home. Order online or visit us!",
  keywords: ["Bangladeshi food", "restaurant Dhaka", "biryani", "traditional food", "Mirpur restaurant", "home delivery"],
  authors: [{ name: "MirpurXpress Team" }],
  creator: "MirpurXpress",
  publisher: "MirpurXpress",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mirpurxpress.com",
    siteName: "MirpurXpress",
    title: "MirpurXpress - Authentic Taste of Bangladesh",
    description: "Experience the best Bangladeshi food at MirpurXpress, Dhaka. Fresh, hygienic, and authentic taste like home.",
    images: [
      {
        url: "/assets/restaurant.png",
        width: 1200,
        height: 630,
        alt: "MirpurXpress Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mirpurxpress",
    creator: "@mirpurxpress",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${hindSiliguri.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffb400" />
        <meta name="description" content="Experience the best Bangladeshi food at MirpurXpress, Dhaka. Fresh, hygienic, and authentic taste like home." />
        <link rel="icon" href="/assets/icon/splash.png" />
        <link rel="apple-touch-icon" href="/assets/icon/splash.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "MirpurXpress",
              "image": "https://mirpurxpress.com/assets/restaurant.png",
              "description": "Authentic Bangladeshi food restaurant in Mirpur, Dhaka. Fresh, hygienic, and delicious meals with home delivery.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mirpur",
                "addressLocality": "Dhaka",
                "addressCountry": "Bangladesh"
              },
              "telephone": "+8801612345678",
              "email": "info@mirpurxpress.com",
              "servesCuisine": ["Bangladeshi", "Indian", "Asian"],
              "priceRange": "$$",
              " openingHours": "Mo-Su 10:00-23:00",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.8163",
                "longitude": "90.3716"
              },
              "sameAs": [
                "https://facebook.com/mirpurxpress",
                "https://instagram.com/mirpurxpress",
                "https://youtube.com/mirpurxpress",
                "https://tiktok.com/mirpurxpress"
              ],
              "menu": "https://mirpurxpress.com/menu",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "5000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
