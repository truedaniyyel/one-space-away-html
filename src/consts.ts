import type { Site, Socials } from './types';

export const SITE: Site = {
  COMPANY_NAME: 'One Space Away',
  LEGAL_NAME: 'One Space Away Interiors, LLC',
  TITLE: 'Home, just the way you like.',
  DESCRIPTION: 'Discover the joy of living in a space that feels truly yours.',
  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://one-space-away-html.pages.dev',
  LOCALE: 'en',
  TELEPHONE: '(310) 555-2389',
  EMAIL: 'info@onespaceaway.com',
  ADDRESS: '456 Camden Drive, Suite 300, Beverly Hills, CA 90210',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '@one_space_away',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'Instagram',
    ICON: 'instagram',
    LABEL: `${SITE.COMPANY_NAME} on Instagram`,
    HREF: 'https://www.instagram.com/',
  },
  {
    NAME: 'Facebook',
    ICON: 'facebook',
    LABEL: `${SITE.COMPANY_NAME} on Facebook`,
    HREF: 'https://www.facebook.com/',
  },
  {
    NAME: 'Pinterest',
    ICON: 'pinterest',
    LABEL: `${SITE.COMPANY_NAME} on Pinterest`,
    HREF: 'https://www.pinterest.com/',
  },
  {
    NAME: 'Youtube',
    ICON: 'youtube',
    LABEL: `${SITE.COMPANY_NAME} on YouTube`,
    HREF: 'https://www.youtube.com/',
  },
];
