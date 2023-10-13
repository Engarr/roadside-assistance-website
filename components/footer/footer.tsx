'use client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='z-[999] relative mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        &copy; {year}. Wszelkie prawa zastrzeżone - TRANSWOS Stanisław Woś.
      </small>
      <p className='text-xs'>
        Zapoznaj się z{' '}
        <Link href='/polityka' className='font-semibold text-[var(--blue)]'>
          polityką prywatności cookies
        </Link>{' '}
      </p>
    </footer>
  );
};

export default Footer;
