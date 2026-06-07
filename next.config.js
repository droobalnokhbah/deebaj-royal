/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.moyasar.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Performance & SEO
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ar',
        permanent: false,
      },
      {
        source: '/home',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/ar/shop',
        permanent: true,
      },
      {
        source: '/product/:slug*',
        destination: '/ar/product/:slug*',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/ar/about',
        permanent: true,
      },
      {
        source: '/luxury-experience',
        destination: '/ar/luxury-experience',
        permanent: true,
      },
      {
        source: '/subscription',
        destination: '/ar/subscription',
        permanent: true,
      },
      {
        source: '/wholesale',
        destination: '/ar/wholesale',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/ar/faq',
        permanent: true,
      },
      {
        source: '/shipping-policy',
        destination: '/ar/shipping-policy',
        permanent: true,
      },
      {
        source: '/return-policy',
        destination: '/ar/return-policy',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/ar/contact',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: '/ar/checkout',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: '/ar/reviews',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
