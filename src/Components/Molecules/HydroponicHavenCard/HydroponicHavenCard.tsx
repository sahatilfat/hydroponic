import React from 'react';
import styles from './HydroponicHavenCard.module.scss';

type IHydroponicHavenCard = {
  imageUrl?: string;
  title?: string;
  description?: string;
};

const HydroponicHavenCard: React.FC<IHydroponicHavenCard> = ({
  imageUrl,
  title = 'Compact Systems',
  description = ' Explore our compact hydroponic units, perfect for small spaces and urban environments.',
}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['image-wrapper']}>
        <img src={imageUrl} alt="image" />
      </div>
      <div className={styles['title']}>{title}</div>
      <div className={styles['description']}>{description}</div>
    </div>
  );
};

export default HydroponicHavenCard;
