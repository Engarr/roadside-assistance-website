import Header from '@/components/header/header';
import './globals.css';
import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';

import ContextProvider from '@/context/context-provider';
import Footer from '@/components/footer/footer';
import Cookie from '@/components/cookie';
import ScrollTop from '@/components/scroll-top';

export const metadata: Metadata = {
  title: 'Pomoc Drogowa | Transwoś Stanisław Woś',
  description: 'Potrzebujesz pomocy na drodze? Chętnie pomożemy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className} `}>
        <ContextProvider>
          <Header />
          <ScrollTop />
          <main>{children}</main>
          <Footer />
          <Cookie />
        </ContextProvider>
      </body>
    </html>
  );
}
