import "./globals.css";

export const metadata = {
  title: "MirpurXpress - Authentic Taste of Bangladesh",
  description: "Experience the best Bangladeshi food at MirpurXpress, Dhaka. Fresh, hygienic, and authentic taste like home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
