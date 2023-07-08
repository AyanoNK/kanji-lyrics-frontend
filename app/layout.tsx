import './globals.css';
import localFont from '@next/font/local';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '鬼門ー音楽と漢字練習',
  description: '一番好きな音楽と漢字を練習しましょう！',
};

const nagayamaKai = localFont({
  display: 'swap',
  variable: '--font-nagayama_kai',
  src: [
    {
      path: '../public/fonts/nagayama_kai08.woff2',
      weight: '400',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nagayamaKai.variable} ${inter.variable} font-sans`}
    >
      <body className="font-mono">{children}</body>
    </html>
  );
}
