import Header from '@/components/header/header';
import './globals.css';
import type { Metadata } from 'next';

import ContextProvider from '@/context/context-provider';
import Footer from '@/components/footer/footer';
import Cookie from '@/components/cookie';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Pomoc Drogowa | Transwoś Stanisław Woś',
  description:
    'Nasza firma oferuje kompleksowe usługi pomocy drogowej oraz transportu sprzętu rolniczego i budowlanego o masie do 14 ton. Zapewniamy szybką i profesjonalną pomoc na drodze oraz bezpieczny transport ciężkiego sprzętu do każdego miejsca. Skorzystaj z naszych usług transportowych, aby bezpiecznie dostarczyć maszyny rolnicze i budowlane tam, gdzie są potrzebne. Działamy sprawnie i efektywnie, dbając o zadowolenie naszych klientów.',
  keywords: [
    'Transport maszyn rolniczych',
    'Transport maszyn budowlanych',
    'Pomoc drogowa',
    'Usługi transportowe do 14 ton',
    'Usługi transportowe ciężkich maszyn',
    'Przewóz maszyn rolniczych i budowlanych',
    'Transport ciężkich ładunków',
    'Transport specjalistyczny maszyn',
    'Usługi przewozu samochodów',
    'Transporter ciężkich maszyn i pojazdów',
    'Transport koparek',
  ],
};

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
