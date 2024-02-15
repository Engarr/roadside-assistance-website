'use client';

import React from 'react';
import logo from '@/public/image/Logo-transwoś.png';
import Image from 'next/image';
import Wrapper from '../wrapper';
import Link from 'next/link';

const sectionOneData = [
  {
    title: 'Lokalizacja firmy',
    text: ['ul. Lipowa 88', '37-716 Orły'],
  },
];

const sectionThreeData = [
  {
    title: 'Kontakt',
    text: ['Telefon:', '+48 608 450 246'],
  },
];

const Footer = () => {
  return (
    <footer className=' bg-[var(--background-dark)] text-[var(--text-main-white)] py-5 lg:py-4 z-50'>
      <Wrapper style={' w-3/4'}>
        <div className=' flex justify-around items-center text-center lg:text-start flex-col xl:flex-row gap-4 lg:gap-1 '>
          <div className=' max-w-[20rem] items-center xl:items-start flex flex-col mb-5 xl:mb-0'>
            <Link href='/#glowna'>
              <Image
                src={logo}
                alt='logo'
                width={150}
                sizes='100vh'
                className='mb-2'
              />
            </Link>
            <p className='text-sm'>
              Transwoś zajmuje się pomocą drogową, transportem pojazdów maszyn
              oraz sprzętu rolniczego o masie do 14 t
            </p>
          </div>

          <div className=' flex gap-2 flex-col md:flex-row justify-around w-full'>
            <div className=''>
              {sectionOneData.map((section, index) => (
                <Section key={index} data={section} />
              ))}
            </div>

            <div className=''>
              {sectionThreeData.map((section, index) => (
                <Section key={index} data={section} />
              ))}
            </div>
          </div>
        </div>

        <div className=' flex text-center text-xs mt-2 justify-center'>
          <p>
            Strona wykonana przez firmę Modezp -{' '}
            <a
              href='https://www.modezp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='pl-1 hover:text-[var(--main-page-color)] transition-colors text-blue-400'>
              www.modezp.com
            </a>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

type SectionType = {
  data: { title: string; text: string[] };
};

const Section = ({ data }: SectionType) => {
  return (
    <div className='flex-1'>
      <div className='text-base lg:text-3xl mb-1 font-semibold'>
        <p>{data.title}</p>
      </div>
      <ul className=''>
        {data.text.map((item, i) => (
          <li key={i} className='text-xs lg:text-base'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
