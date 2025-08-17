import React from 'react';
import styles from './MainHero.module.scss';
import ButtonDefault from '@/Components/Atoms/ButtonDefault/ButtonDefault';
import Layout from '@/Components/Layout/Layout';

const MainHero = () => {
  return (
    <Layout>
      <div className={styles['container']}>
        <div className={styles['left-content']}>
          <div className={styles['content']}>
            <p className={styles['text']}>Discover the Future of Hydroponics</p>
            <p className={`${styles['text']} ${styles['main']}`}>
              Elevating Sustainable Gardening{' '}
            </p>
            <p className={`${styles['text']} ${styles['description']}`}>
              At Melon Hydroponics, we're revolutionizing the way you grow. Our
              cutting-edge hydroponic systems combine innovative technology and
              expert knowledge to provide a{' '}
            </p>
            <div className={styles['button-wrapper']}>
              <ButtonDefault title="Explore Now" />
            </div>
          </div>
        </div>
        <div className={styles['right-content']}>
          <div className={styles['hero-wrapper']}>
            <img src="/assets/image/melon-vector.png" alt="hero" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainHero;
