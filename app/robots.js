import { MetadataRoute } from 'next';

export default function robots() {
  const baseUrl = 'https://mirpurxpress.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
