import React from 'react';
import styles from './MainHero.module.scss';
import Layout from '@/Components/Layout/Layout';

const MainHero = () => {
  return (
    <Layout>
      <div className={styles['container']}>
        <div className={styles['left-content']}>
          <div className={styles['content']}>
            <p className={styles['text']}>Nikmati Manisnya Melon Hidroponik</p>
            <p className={`${styles['text']} ${styles['main']}`}>
              Langsung dari Kebun Kami!
            </p>
            <p className={`${styles['text']} ${styles['description']}`}>
              Nikmati pengalaman berbeda dengan melon hidroponik – lebih segar,
              lebih sehat, lebih istimewa.
            </p>
            {/* <div className={styles['button-wrapper']}>
              <ButtonDefault title="Explore Now" />
            </div> */}
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
