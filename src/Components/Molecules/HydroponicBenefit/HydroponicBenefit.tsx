import React from 'react';
import styles from './HydroponicBenefit.module.scss';
import Layout from '@/Components/Layout/Layout';

const HydroponicBenefit = () => {
  return (
    <Layout>
      <div className={styles['container']}>
        <div className={styles['right-content']}>
          <div className={styles['hero-wrapper']}>
            <img src="/assets/image/benih_melon.svg" alt="hero" />
          </div>
        </div>
        <div className={styles['left-content']}>
          <p className={styles['title']}>Manfaat Sistem Hidroponik</p>
          <ul>
            <li>Penggunaan air yang lebih sedikit</li>
            <li>Pertumbuhan tanaman yang lebih cepat</li>
            <li>Hasil yang lebih baik</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default HydroponicBenefit;
