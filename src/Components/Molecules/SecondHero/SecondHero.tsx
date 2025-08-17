import React from 'react';
import styles from './SecondHero.module.scss';
import Layout from '@/Components/Layout/Layout';

const SecondHero = () => {
  return (
    <Layout>
      <div className={styles['container']}>
        <div className={styles['right-content']}>
          <div className={styles['hero-wrapper']}>
            <img src="/assets/image/melon-slice.png" alt="hero" />
          </div>
        </div>
        <div className={styles['left-content']}>
          <p className={styles['title']}>Grow with Melon</p>
          <p className={styles['description']}>
            Welcome to Melon Hydroponics, where we&apos;re dedicated to
            empowering you with the tools and knowledge to cultivate your own
            thriving hydroponic garden. Our mission is to make sustainable,
            high-yield gardening accessible to everyone
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SecondHero;
