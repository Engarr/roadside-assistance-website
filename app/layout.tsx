import Header from '@/components/header/header';
import './globals.css';
import type { Metadata } from 'next';

import ContextProvider from '@/context/context-provider';
import Footer from '@/components/footer/footer';
import Cookie from '@/components/cookie';
import ScrollTop from '@/components/scroll-top';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Pomoc Drogowa | Transwoś Stanisław Woś',
  description: 'Potrzebujesz pomocy na drodze? Chętnie pomożemy',
};
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth '>
      <body className={`${poppins.className} overflow-x-hidden`}>
        <ContextProvider>
          <Header />
          
          <main>{children}</main>
          <Footer />
          <Cookie />
        </ContextProvider>
      </body>
    </html>
  );
}
