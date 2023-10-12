import Header from '@/components/header/header';
import './globals.css';
import type { Metadata } from 'next';
import { inter, roboto_mono } from '@/lib/fonts';

import ContextProvider from '@/context/context-provider';

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
      <body className={`${inter.className} ${roboto_mono.className}`}>
        <ContextProvider>
          <Header />
          <main>{children}</main>
        </ContextProvider>
      </body>
    </html>
  );
}
