import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import ContextProvider from '@/store/context-provider';

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
    <html lang='en'>
      <body className={`${inter.className} relative`}>
        <ContextProvider>
          <Header />
          <main>{children}</main>
        </ContextProvider>
      </body>
    </html>
  );
}
