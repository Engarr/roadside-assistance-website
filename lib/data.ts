import React from 'react';
import { BsPatchQuestion, BsTruckFlatbed } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';

export const links = [
  { name: 'Strona główna', link: '/#glowna' },
  { name: 'O nas', link: '/#onas' },
  { name: 'Oferta', link: '/#oferta' },
  { name: 'Kontakt', link: '/#kontakt' },
  { name: 'Galeria', link: '/galeria' },
] as const;

export const offers = [
  {
    title: 'Holujemy',
    arr: [
      'Samochody osobowe',
      'Pojazdy ciężarowe',
      'Maszyny rolnicze i budowlane',
    ],
    icon: React.createElement(BsTruckFlatbed),
  },
  {
    title: 'Świadczymy usługi',
    arr: ['Na terenie całego kraju'],
    icon: React.createElement(GrMapLocation),
  },
  {
    title: 'Dlaczego my?',
    arr: [
      'Posiadamy specjalistyczny sprzęt',
      'Wykwalifikowany personel',
      'Zapewnimy bezpieczny i terminowy transport',
    ],
    icon: React.createElement(BsPatchQuestion),
  },
] as const;

export const polityc = [
  {
    title: 'Pliki Cookies',
    description:
      'Serwis zbiera w sposób automatyczny tylko informacje zawarte w plikach cookies. Pliki (cookies) są plikami tekstowymi, które przechowywane są w urządzeniu końcowym użytkownika serwisu. Przeznaczone są do korzystania ze stron serwisu. Przede wszystkim zawierają nazwę strony internetowej swojego pochodzenia, swój unikalny numer, czas przechowywania na urządzeniu końcowym.',
  },
  {
    title: 'Operator serwisu',
    description:
      'Operator serwisu jest podmiotem zamieszczającym na urządzeniu końcowym swojego użytkownika pliki cookies oraz mającym do nich dostęp. Operator serwisu wykorzystuje pliki (cookies) w celu: dopasowania zawartości strony internetowej do indywidualnych preferencji użytkownika, przede wszystkim pliki te rozpoznają jego urządzenie, aby zgodnie z jego preferencjami wyświetlić stronę, przygotowywania statystyk pomagających poznaniu preferencji i zachowań użytkowników, analiza tych statystyk jest anonimowa i umożliwia dostosowanie zawartości i wyglądu serwisu do panujących trendów, statystyki stosuje się też do oceny popularności strony, możliwości logowania do serwisu, utrzymania logowania użytkownika na każdej kolejnej stronie serwisu.',
  },
  {
    title: 'Rodzaje plików cookie',
    description:
      'Serwis stosuje dwa zasadnicze rodzaje plików (cookies) - sesyjne i stałe. Pliki sesyjne są tymczasowe, przechowuje się je do momentu opuszczenia strony serwisu (poprzez wejście na inną stronę, wylogowanie lub wyłączenie przeglądarki). Pliki stałe przechowywane są w urządzeniu końcowym użytkownika do czasu ich usunięcia przez użytkownika lub przez czas wynikający z ich ustawień. Użytkownik może w każdej chwili dokonać zmiany ustawień swojej przeglądarki, aby zablokować obsługę plików (cookies) lub każdorazowo uzyskiwać informacje o ich umieszczeniu w swoim urządzeniu. Inne dostępne opcje można sprawdzić w ustawieniach swojej przeglądarki internetowej. Należy pamiętać, że większość przeglądarek domyślnie jest ustawione na akceptację zapisu plików (cookies)w urządzeniu końcowym.',
  },
  {
    title: 'Dodatkowe informacje',
    description:
      'Operator Serwisu informuje, że zmiany ustawień w przeglądarce internetowej użytkownika mogą ograniczyć dostęp do niektórych funkcji strony internetowej serwisu. Pliki (cookies) z których korzysta serwis (zamieszczane w urządzeniu końcowym użytkownika) mogą być udostępnione jego partnerom oraz współpracującym z nim reklamodawcą. Informacje dotyczące ustawień przeglądarek internetowych dostępne są w jej menu (pomoc) lub na stronie jej producenta. Bardziej szczegółowe informacje na temat plików (cookies) dostępne są na stronie ciasteczka.org.pl',
  },
] as const;

export const imagesPaths = [
  '/images/333242217_526028576318165_996668996135343305_n.jpg',
  '/images/333445182_756599999374793_2499658063319991975_n.jpg',
  '/images/333626219_587718386632056_2410935324231722916_n.jpg',
  '/images/370056219_662553392612122_1630923149949011807_n.jpg',
  '/images/333242217_526028576318165_996668996135343305_n.jpg',
  '/images/333445182_756599999374793_2499658063319991975_n.jpg',
  '/images/333626219_587718386632056_2410935324231722916_n.jpg',
  '/images/370056219_662553392612122_1630923149949011807_n.jpg',
];
