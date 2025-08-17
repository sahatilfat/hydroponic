import React from 'react';
import styles from './TransformGardenSection.module.scss';
import ButtonDefault from '@/Components/Atoms/ButtonDefault/ButtonDefault';

const TransformGardenSection = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['left-content']}>
        <div className={styles['content']}>
          <img src="/assets/image/melon-transform.png" alt="melon" />
        </div>
      </div>
      <div className={styles['right-content']}>
        <div className={styles['content']}>
          <p className={styles['title']}>
            Transform Your <br /> Gardening
          </p>
          <p className={styles['description']}>
            At Melon Hydroponics, we&apos;re passionate about empowering you to
            grow your own nutritious, flavorful produce with our cutting-edge
            hydroponic systems. Our innovative technology and expert guidance
            make it easier than ever to cultivate a thriving indoor or outdoor
            garden, no matter your space or experience level
          </p>
          <div className={styles['button-wrapper']}>
            <ButtonDefault title="Get Startted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformGardenSection;
