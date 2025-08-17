import React from 'react';
import styles from './HydroponicHavenSection.module.scss';
import HydroponicHavenCard from '@/Components/Molecules/HydroponicHavenCard/HydroponicHavenCard';

const HydroponicHavenSection = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        Cultivate Your Own <br /> Hydroponic Haven
      </div>
      <div className={styles['card-wrapper']}>
        <div className={styles['card']}>
          <HydroponicHavenCard
            title="Compact Systems"
            description="Explore our compact hydroponic units, perfect for small spaces and urban environments."
            imageUrl="/assets/image/compact-system.png"
          />
        </div>
        <div className={styles['card']}>
          <HydroponicHavenCard
            title="Grow Bigger"
            description="Discover our large-scale commercial hydroponic systems for high-yield production."
            imageUrl="/assets/image/grow-bigger.png"
          />
        </div>
        <div className={styles['card']}>
          <HydroponicHavenCard
            title="Greenhouse Solutions"
            description="Enhance your hydroponic growing with our specialized greenhouse setups."
            imageUrl="/assets/image/greenhouse-solution.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HydroponicHavenSection;
