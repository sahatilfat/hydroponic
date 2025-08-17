import React from 'react';
import styles from './Navbar.module.scss';
import ButtonNavigation from '@/Components/Atoms/ButtonNavigation/ButtonNavigation';
import Layout from '@/Components/Layout/Layout';

const Navbar = () => {
  return (
    <Layout>
      <div className={styles['container']}>
        <div className={styles['logo-wrapper']}>
          <img src="/assets/image/melon.png" alt="logo" />
        </div>
        <div className={styles['btn-wrapper']}>
          <ButtonNavigation title="Home" isActive={true} />
          <ButtonNavigation title="About" />
          <ButtonNavigation title="Products" />
          <ButtonNavigation title="Contact" />
          <ButtonNavigation title="Shop" />
        </div>
      </div>
    </Layout>
  );
};

export default Navbar;
