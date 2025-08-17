import Navbar from '@/Components/Molecules/Navbar/Navbar';
import React from 'react';
import styles from './HomePage.module.scss';
import MainHero from '@/Components/Molecules/MainHero/MainHero';
import SecondHero from '@/Components/Molecules/SecondHero/SecondHero';
import ExploreProduct from '@/Components/Molecules/ExploreProduct/ExploreProduct';
import HydroponicHavenSection from '@/Components/Molecules/HydroponicHavenSection/HydroponicHavenSection';
import TransformGardenSection from '@/Components/Molecules/TransformGardenSection/TransformGardenSection';
import Footer from '@/Components/Molecules/Footer/Footer';

function HomePage() {
  return (
    <div className={styles['container']}>
      <div className={styles['navbar-wrapper']}>
        <Navbar />
      </div>
      <div className={styles['main-content-wrapper']}>
        <MainHero />
      </div>
      <div className={styles['second-content-wrapper']}>
        <SecondHero />
      </div>
      <div className={styles['explore-product-wrapper']}>
        <ExploreProduct />
      </div>
      <div className={styles['hydroponic-haven-wrapper']}>
        <HydroponicHavenSection />
      </div>
      <div className={styles['transform-garden-wrapper']}>
        <TransformGardenSection />
      </div>
        <div className={styles['footer-wrapper']}>
          <Footer />
        </div>
    </div>
  );
}

export default HomePage;
