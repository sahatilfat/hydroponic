import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles['container']}>
      <img src="/assets/image/melon-slice.png" alt="image" />
    </div>
  );
};

export default Card;
