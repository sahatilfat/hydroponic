import React from 'react';
import styles from './ExploreProduct.module.scss';
import ButtonDefault from '@/Components/Atoms/ButtonDefault/ButtonDefault';
const ExploreProduct = () => {
  return (
    <div className={styles['container']}>
      <img src="/assets/image/hero-background.jpg" alt="background" />
      <div className={styles['content-wrapper']}>
        <div className={styles['left-content']}>
          <div className={styles['text-wrapper']}>
            <p className={styles['title']}>Explore Our Products</p>
            <p className={styles['description']}>
              Discover our wide range of high-performance hydroponic systems
              designed to cater to every gardening need. From compact countertop
              units perfect for small spaces to large-scale commercial setups,
              we have the solution to help you maximize your yields and elevate
              your growing experience
            </p>
            <div className={styles['button-wrapper']}>
              <ButtonDefault type="white" />
            </div>
          </div>
        </div>
        <div className={styles['right-content']}>
          <div className={styles['image-wrapper']}>
            <img src="/assets/image/green-melon.png" alt="melon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
