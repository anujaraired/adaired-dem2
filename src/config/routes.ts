import icon_1 from '../../public/assets/icons/header/Group 1000006700.svg';
import icon_2 from '../../public/assets/icons/header/Group 1000006727.svg';
import icon_3 from '../../public/assets/icons/header/Group 1000006729.svg';
import icon_4 from '../../public/assets/icons/header/Group 1000006731.svg';
import icon_5 from '../../public/assets/icons/header/Group 1000006730.svg';
import icon_6 from '../../public/assets/icons/header/Group 1000006732.svg';
import icon_7 from '../../public/assets/icons/header/Group 1000006733.svg';
import icon_8 from '../../public/assets/icons/header/ai-technology 1.svg';
import icon_9 from '../../public/assets/icons/header/Group 1000006735.svg';
import icon_10 from '../../public/assets/icons/header/Group 1000006736.svg';

/* ======================================
   NAV TYPES
====================================== */

export type NavLeaf = {
  name: string;
  href: string;
};

export type NavGroup = {
  icon: string;
  name: string;
  href: string;
  subItems: NavLeaf[];
};

export type WebsiteNavItem = {
  label: string;
  value: string;
  href: string;
  subItems?: NavGroup[] | NavLeaf[];
};

/* ======================================
   TYPE GUARDS (CRITICAL FIX)
====================================== */

export const isNavGroupArray = (
  items: WebsiteNavItem['subItems']
): items is NavGroup[] =>
  Array.isArray(items) &&
  items.length > 0 &&
  typeof items[0] === 'object' &&
  'subItems' in items[0];

export const isNavLeafArray = (
  items: WebsiteNavItem['subItems']
): items is NavLeaf[] =>
  Array.isArray(items) && (items.length === 0 || !('subItems' in items[0]));

/* ======================================
   ROUTES
====================================== */

export const routes: {
  auth: Record<string, string>;
  root: Record<string, string>;
  websiteNav: WebsiteNavItem[];
  homeWebsite: Record<string, string>;
  ecommerceNav: {
    label: string;
    value: string;
    href: string;
  }[];
  eCommerce: {
    home: string;
    products: string;
    shop: string;
    cart: string;
    contentProductForm: (slug: string) => string;
    orders: string;
    orderDetails: (id: string) => string;
    thankyouPage: string;
  };
  userDashboard: {
    website: string;
    dashboard: string;
    accountSettings: string;
    passwordSettings: string;
    cart: string;
    orders: string;
    tickets: string;
    inbox: (tickedId: string) => string;
    invoices: string;
    invoiceDetails: (id: string) => string;
  };
  termsNconditions: string;
  privacyPolicy: string;
} = {
  auth: {
    signUp: '/auth/sign-up',
    signIn: '/auth/sign-in',
    forgotPassword: '/auth/forgot-password',
    error: '/auth/error',
  },

  root: {
    home: '/',
    bhwHome: '/expert-content-solutions',
    TermsNConditions: '/terms-and-conditions',
    PrivacyPolicy: '/privacy-policy',
  },

  websiteNav: [
    {
      label: 'About Us',
      value: 'about',
      href: '/about',
    },
    {
      label: 'Services',
      value: 'services',
      href: '#',
      subItems: [
        {
          icon: icon_1,
          name: 'White Label (For Agencies)',
          href: '/services/web-design-development-company',
          subItems: [
            {
              name: 'White Label SEO',
              href: '/services/wordpress-development',
            },
            {
              name: 'White Label Socila Media',
              href: '/services/custom-web-development',
            },
            { name: 'White Label Paid Ads', href: '/services/woocommerce' },
            {
              name: 'White Label Link Building',
              href: '/services/shopify-development',
            },
          ],
        },
        {
          icon: icon_2,
          name: 'Link Building',
          href: '/services/web-design-development-company',
          subItems: [
            {
              name: 'High Authority Link Building',
              href: '/services/wordpress-development',
            },
            {
              name: 'Gest Post Links',
              href: '/services/custom-web-development',
            },
            { name: 'Niche Edits', href: '/services/woocommerce' },
            {
              name: 'Press Releases',
              href: '/services/shopify-development',
            },
          ],
        },

        {
          icon: icon_3,
          name: 'Social Media Management',
          href: '/services/strategic-social-media-management',
          subItems: [
            {
              name: 'Port Creation',
              href: '/services/social-media-optimization',
            },
            {
              name: 'Content Calendar',
              href: '/services/social-media-marketing',
            },
            {
              name: 'Reel Editing',
              href: '/services/social-media-optimization',
            },
            {
              name: 'Creatives',
              href: '/services/social-media-marketing',
            },
          ],
        },
        {
          icon: icon_4,
          name: 'Content Writing & Marketing',
          href: '/services/strategic-social-media-management',
          subItems: [
            {
              name: 'Article Writing',
              href: '/services/social-media-optimization',
            },
            {
              name: 'Blog Writing',
              href: '/services/social-media-marketing',
            },
            {
              name: 'Web Content',
              href: '/services/social-media-optimization',
            },
            {
              name: 'ECommerce Content',
              href: '/services/social-media-marketing',
            },
          ],
        },

        {
          icon: icon_5,
          name: 'Search Engine Optimization (SEO)',
          href: '/services/seo-company-india',
          subItems: [
            {
              name: 'SEO',
              href: '/services/technical-seo-analysis',
            },
            {
              name: 'SAAS SEO',
              href: '/services/online-reputation-management',
            },
            {
              name: 'ECommerce SEO',
              href: '/services/competitor-backlink-outreach',
            },
          ],
        },
        {
          icon: icon_6,
          name: 'Local SEO',
          href: '/services/strategic-social-media-management',
          subItems: [
            {
              name: 'GBP Only',
              href: '/services/social-media-optimization',
            },
            {
              name: 'GBP + Website',
              href: '/services/social-media-marketing',
            },
          ],
        },

        {
          icon: icon_7,
          name: 'Web Design & Development',
          href: '/services/white-label-agency-india',
          subItems: [
            {
              name: 'Wordpress Development',
              href: '/services/seo-outsourcing-india',
            },
            {
              name: 'Shopify Development',
              href: '/services/social-media-outsourcing-india',
            },
            {
              name: 'ECommerce Development',
              href: '/services/white-label-paid-ads',
            },
            {
              name: 'Custom Web Development',
              href: '/services/white-label-link-building',
            },
          ],
        },
        {
          icon: icon_8,
          name: 'AI SEO',
          href: '/services/digital-creative-and-logo-design',
          subItems: [
            {
              name: 'AI SEO',
              href: '/services/digital-creative-and-logo-design',
            },
            {
              name: 'LMM SEO/LLMO',
              href: '/services/digital-creative-and-logo-design',
            },
            {
              name: 'GEO',
              href: '/services/digital-creative-and-logo-design',
            },
            {
              name: 'AEO',
              href: '/services/digital-creative-and-logo-design',
            },
          ],
        },

        {
          icon: icon_9,
          name: 'Pay Per Click & SMM',
          href: '/services/paid-media-and-advertising',
          subItems: [
            {
              name: 'Google Ads',
              href: '/services/paid-media-and-advertising',
            },
            {
              name: 'Meta Ads',
              href: '/services/paid-media-and-advertising',
            },
            {
              name: 'Linkedin Ads',
              href: '/services/paid-media-and-advertising',
            },
            {
              name: 'CPC Bid Management',
              href: '/services/paid-media-and-advertising',
            },
            {
              name: 'TikTok Ads',
              href: '/services/paid-media-and-advertising',
            },
          ],
        },
        {
          icon: icon_10,
          name: 'Mobile App Development',
          href: '/services/white-label-agency-india',
          subItems: [
            {
              name: 'IOS Development',
              href: '/services/seo-outsourcing-india',
            },
            {
              name: 'Android Development',
              href: '/services/social-media-outsourcing-india',
            },
            {
              name: 'Cross-Platform',
              href: '/services/white-label-paid-ads',
            },
            {
              name: 'Wearables',
              href: '/services/white-label-link-building',
            },
          ],
        },
      ],
    },
    {
      label: 'White Label',
      value: 'White Label',
      href: '/services/white-label-agency-india',
      subItems: [
        { name: 'White Label SEO', href: '/services/seo-outsourcing-india' },
        {
          name: 'White Label Social Media',
          href: '/services/social-media-outsourcing-india',
        },
        {
          name: 'White Label Paid Ads',
          href: '/services/white-label-paid-ads',
        },
        {
          name: 'White Label Link Building',
          href: '/services/white-label-link-building',
        },
      ],
    },
    {
      label: 'Resources',
      value: 'resources',
      href: '#',
      subItems: [
        { name: 'Career', href: '/career' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
      ],
    },

    {
      label: 'Contact Us',
      value: 'contact',
      href: '/contact',
    },
  ],

  homeWebsite: {
    TermsNConditions: '/terms-and-conditions',
    PrivacyPolicy: '/privacy-policy',
  },

  ecommerceNav: [
    { label: 'Home', value: 'home', href: '/expert-content-solutions' },
    {
      label: 'Services',
      value: 'services',
      href: '/expert-content-solutions#products',
    },
    { label: 'FAQs', value: 'faqs', href: '/expert-content-solutions#faqs' },
    {
      label: 'Pricing',
      value: 'pricing',
      href: '/expert-content-solutions#products',
    },
    {
      label: 'Contact',
      value: 'contact',
      href: '/expert-content-solutions#contact',
    },
  ],

  eCommerce: {
    home: '/expert-content-solutions',
    products: '/expert-content-solutions/#products',
    shop: '/expert-content-solutions/#products',
    cart: '/expert-content-solutions/cart',
    contentProductForm: (slug: string) =>
      `/expert-content-solutions/products/${slug}/form`,
    orders: '/expert-content-solutions/orders',
    orderDetails: (id: string) =>
      `/dashboard/shop/orders/order-details?orderNumber=${id}`,
    thankyouPage: '/expert-content-solutions/thankyou',
  },

  userDashboard: {
    website: '/expert-content-solutions',
    dashboard: '/dashboard',
    accountSettings: '/dashboard/user/profile-settings',
    passwordSettings: '/dashboard/user/profile-settings/password',
    cart: '/dashboard/shop/cart',
    orders: '/dashboard/shop/orders',
    tickets: '/dashboard/support/tickets',
    inbox: (tickedId: string) => `/dashboard/support/inbox?tkt=${tickedId}`,
    invoices: '/dashboard/invoices',
    invoiceDetails: (id: string) =>
      `/dashboard/invoices/details?invoiceNumber=${id}`,
  },

  termsNconditions: 'https://www.adaired.com/terms-and-conditions',
  privacyPolicy: 'https://www.adaired.com/privacy-policy',
};
