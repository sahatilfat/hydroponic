import React, { useState } from 'react';
import styles from './Footer.module.scss';
import Instagram from '@/Components/Atoms/Icons/Instagram';

const Footer = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className={styles['container']}>
      <div className={styles['left-content']}>
        <p className={styles['text1']}>&#169; 2024 - now, Melon Hydroponics</p>
        <p className={styles['text2']}>All rights reserved.</p>
        <p className={styles['text-3']}>Ladang Patani</p>
      </div>
      <div className={styles['center-content']}>
        {/* <img src="/assets/image/melon.png" alt="logo" /> */}
      </div>
      <div
        className={styles['right-content']}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <a
          href="https://www.instagram.com/m.tafli/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram isHover={isHover} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
