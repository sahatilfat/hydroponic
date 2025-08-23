import React from 'react';
import styles from './SecondHero.module.scss';
import Layout from '@/Components/Layout/Layout';

const SecondHero = () => {
  return (
    <Layout>
      <div className={styles['container']}>
        <div className={styles['right-content']}>
          <div className={styles['hero-wrapper']}>
            <img src="/assets/image/melon-slice2.png" alt="hero" />
          </div>
        </div>
        <div className={styles['left-content']}>
          <p className={styles['title']}>Rasa Lebih Manis</p>
          <p className={styles['description']}>
            Melon yang ditanam dengan metode hidroponik cenderung memiliki rasa
            yang lebih manis karena nutrisi yang diberikan kepada tanaman sangat
            terkontrol dan spesifik
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SecondHero;
