import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'YandexBot'],
        allow: '/',
      },
      {
        userAgent: ['AhrefsBot', 'MJ12bot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://muhammadkashan.dev/sitemap.xml',
  }
}