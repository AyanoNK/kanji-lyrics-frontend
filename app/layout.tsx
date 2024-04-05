import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './Footer';
import Header from './Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '鬼門',
  description: '鬼門 - Practice Kanji through Japanese music!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center min-h-screen`}>
        <main className="flex flex-col w-full md:max-w-2xl xl:max-w-4xl gap-16">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
