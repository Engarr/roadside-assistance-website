import React from 'react';

const Map = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2570.922817314262!2d22.794962!3d49.881476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7d0e285aa50d%3A0xdee8e2b2060d6f06!2sLipowa%2088%2C%2037-716%20Or%C5%82y!5e0!3m2!1spl!2spl!4v1697111581351!5m2!1spl!2spl'
      title='lokalizacja firmy Transwoś'
      width='600'
      height='450'
      style={{ border: '0', width: '100%', height: '100%', padding: 2 }}
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'></iframe>
  );
};

export default Map;
