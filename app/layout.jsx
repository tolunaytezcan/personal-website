import { JetBrains_Mono } from 'next/font/google';

import Header from '@/components/header';

import './globals.css';
import PageTransition from '@/components/page-transition';
import StairTransition from '@/components/stair-transition';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: {
    default: 'Tolunay Tezcan - Frontend Engineer',
    template: '%s | Tolunay Tezcan'
  },
  description: 'Frontend Engineer specializing in React, React Native, and Next.js. Building modern web and mobile applications with focus on performance and user experience.',
  keywords: ['Frontend Engineer', 'React Developer', 'React Native Developer', 'Next.js Developer', 'TypeScript', 'JavaScript', 'Web Development', 'Mobile Development'],
  authors: [{ name: 'Tolunay Tezcan' }],
  creator: 'Tolunay Tezcan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tolunaytezcan.com',
    site_name: 'Tolunay Tezcan',
    title: 'Tolunay Tezcan - Frontend Engineer',
    description: 'Frontend Engineer specializing in React, React Native, and Next.js. Building modern web and mobile applications with focus on performance and user experience.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tolunay Tezcan - Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tolunay Tezcan - Frontend Engineer',
    description: 'Frontend Engineer specializing in React, React Native, and Next.js. Building modern web and mobile applications with focus on performance and user experience.',
    images: ['/og-image.png'],
    creator: '@tolunaytezcan_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
