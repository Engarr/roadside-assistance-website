import React from 'react';
import { BsPatchQuestion, BsTruckFlatbed } from 'react-icons/bs';
import { GrMapLocation } from 'react-icons/gr';

export const links = [
  { name: 'Strona główna', link: '#glowna' },
  { name: 'O nas', link: '#onas' },
  { name: 'Oferta', link: '#oferta' },
  { name: 'Konatkt', link: '#kontakt' },
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
