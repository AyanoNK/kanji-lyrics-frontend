import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
