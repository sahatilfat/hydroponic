import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div className={styles['container']}>
      <div className={`${styles['foto']} ${styles['foto1']}`}>
        <img src="/assets/image/gallery/apollo.png" alt="" />
      </div>
      <div className={`${styles['foto']} ${styles['foto2']}`}>
        <img src="/assets/image/gallery/inthanon.png" alt="" />
      </div>
      <div className={`${styles['foto']} ${styles['foto3']}`}>
        <img src="/assets/image/gallery/embun.png" alt="" />
      </div>
      <div className={`${styles['foto']} ${styles['foto4']}`}>
        <img src="/assets/image/gallery/all-gh.png" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
