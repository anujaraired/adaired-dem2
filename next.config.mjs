/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudflare-ipfs.com',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '/redqteam.com/isomorphic-furyroad/public/**',
      },
      {
        protocol: 'https',
        hostname: 'isomorphic-furyroad.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'isomorphic-furyroad.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'demo.adaired.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    // const dynamicRedirects = await fetchRedirects();
    return [
      {
        source: '/expert-content-solutions/products/form',
        destination: '/expert-content-solutions/products/website-content/form',
        permanent: true,
      },
      {
        source: '/services/seo-company-india',
        destination: '/services/search-engine-optimization',
        permanent: true,
      },
      {
        source: '/services/ecommerce-seo-agency-india',
        destination: '/services/ecommerce-seo-agency',
        permanent: true,
      },
      {
        source: '/services/ai-seo-india',
        destination: '/services/ai-seo-agency',
        permanent: true,
      },
      {
        source: '/services/llm-seo-india',
        destination: '/services/llm-seo-agency',
        permanent: true,
      },
      {
        source: '/services/generative-engine-optimization-india',
        destination: '/services/generative-engine-optimization',
        permanent: true,
      },
      {
        source: '/services/answer-engine-optimization-india',
        destination: '/services/answer-engine-optimization',
        permanent: true,
      },
      {
        source: '/services/local-seo-company-india',
        destination: '/services/local-seo-company',
        permanent: true,
      },
      {
        source: '/services/gmb-optimization-india',
        destination: '/services/google-my-business-optimization',
        permanent: true,
      },
      {
        source: '/services/gmb-website-seo-india',
        destination: '/services/gmb-website-seo',
        permanent: true,
      },
      {
        source: '/services/link-building-agency-india',
        destination: '/services/link-building-agency',
        permanent: true,
      },
      {
        source: '/services/ppc-management-company-india',
        destination: '/services/ppc-management-company',
        permanent: true,
      },
      {
        source: '/services/social-media-management-india',
        destination: '/services/social-media-management',
        permanent: true,
      },
      {
        source: '/services/wordpress-development-company-india',
        destination: '/services/wordpress-development-company',
        permanent: true,
      },
      {
        source: '/services/shopify-development-company-india',
        destination: '/services/shopify-development-company',
        permanent: true,
      },
      {
        source: '/services/ecommerce-development-company-india',
        destination: '/services/ecommerce-development-company',
        permanent: true,
      },
      {
        source: '/services/mobile-apps-development-india',
        destination: '/services/mobile-app-development-company',
        permanent: true,
      },
      {
        source: '/services/ios-app-development-agency-india',
        destination: '/services/ios-app-development-company',
        permanent: true,
      },
      {
        source: '/services/android-app-development-company-india',
        destination: '/services/android-app-development-company',
        permanent: true,
      },
      {
        source: '/services/wearables-app-development',
        destination: '/services/cross-platform-app-development',
        permanent: true,
      },
      {
        source: '/services/android-app-development-company-india',
        destination: '/services/android-app-development-company',
        permanent: true,
      },
      {
        source: '/services/android-app-development-company-india',
        destination: '/services/android-app-development-company',
        permanent: true,
      },
      // ...dynamicRedirects, // Spread the dynamic redirects from API
    ];
  },
  reactStrictMode: true,
  transpilePackages: ['core'],
};

export default nextConfig;
