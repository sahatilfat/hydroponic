import Navbar from '@/Components/Molecules/Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import MainHero from '@/Components/Molecules/MainHero/MainHero';
import SecondHero from '@/Components/Molecules/SecondHero/SecondHero';
import ExploreProduct from '@/Components/Molecules/ExploreProduct/ExploreProduct';
import TransformGardenSection from '@/Components/Molecules/TransformGardenSection/TransformGardenSection';
import Footer from '@/Components/Molecules/Footer/Footer';
import { motion } from 'framer-motion';
import HydroponicBenefit from '@/Components/Molecules/HydroponicBenefit/HydroponicBenefit';
import Slider from '@/Components/Molecules/Slider/Slider';
import SwiperSlider from '@/Components/Molecules/SwiperSlider/SwiperSlider';
import CardWithDescription from '@/Components/Molecules/CardWithDescription/CardWithDescription';
import SwiperSlider2 from '@/Components/Molecules/SwiperSlider2/SwiperSlider2';
import Gallery from '@/Components/Molecules/Gallery/Gallery';
import HoverText from '@/Components/Molecules/HoverText/HoverText';

function HomePage() {
  // posisi kotak1
  const [pos1, setPos1] = useState({ x: 100, y: 100 });
  const [vel1, setVel1] = useState({ vx: 2, vy: 3 });

  // posisi kotak2
  const [pos2, setPos2] = useState({ x: 300, y: 200 });
  const [vel2, setVel2] = useState({ vx: -3, vy: 2 });

  // posisi kotak3
  const [pos3, setPos3] = useState({ x: 150, y: 400 });
  const [vel3, setVel3] = useState({ vx: 1, vy: -2 });

  // posisi kotak4
  const [pos4, setPos4] = useState({ x: 500, y: 100 });
  const [vel4, setVel4] = useState({ vx: 2, vy: 1 });

  // fungsi gerak (biar reusable)
  const moveBox = (
    pos: { x: number; y: number },
    vel: { vx: number; vy: number },
    setPos: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>,
    setVel: React.Dispatch<React.SetStateAction<{ vx: number; vy: number }>>
  ) => {
    setPos((prev) => {
      let { x, y } = prev;
      let { vx, vy } = vel;

      x += vx;
      y += vy;

      const boxSize = 200;
      const maxX = window.innerWidth - boxSize;
      const maxY = window.innerHeight - boxSize;

      // mantul X
      if (x <= 0 || x >= maxX) {
        vx = -vx;
        x = Math.max(0, Math.min(x, maxX));
      }
      // mantul Y
      if (y <= 0 || y >= maxY) {
        vy = -vy;
        y = Math.max(0, Math.min(y, maxY));
      }

      setVel({ vx, vy });
      return { x, y };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveBox(pos1, vel1, setPos1, setVel1);
      moveBox(pos2, vel2, setPos2, setVel2);
      moveBox(pos3, vel3, setPos3, setVel3);
      moveBox(pos4, vel4, setPos4, setVel4);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [pos1, vel1, pos2, vel2, pos3, vel3, pos4, vel4]);

  return (
    <div className={styles['container']}>
      {/* KOTAK 1 */}
      {/* <motion.div
        className={styles['kotak']}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
        animate={{ x: pos1.x, y: pos1.y }}
        transition={{ duration: 0.016, ease: 'linear' }}
      >
        <img src="/assets/image/lebah_2.gif" alt="bee" />
      </motion.div> */}

      {/* KOTAK 2 */}
      {/* <motion.div
        className={styles['kotak2']}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
        animate={{ x: pos2.x, y: pos2.y, scaleX: vel2.vx < 0 ? -1 : 1 }}
        transition={{ duration: 0.016, ease: 'linear' }}
      >
        <img src="/assets/image/lebah.gif" alt="bee" />
      </motion.div> */}

      {/* KOTAK 3 */}
      {/* <motion.div
        className={styles['kotak3']}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        animate={{ x: pos3.x, y: pos3.y }}
        transition={{ duration: 0.016, ease: 'linear' }}
      >
        <img
          src="/assets/image/bg-blur.png"
          alt="background blur"
          width={900}
        />
      </motion.div>
      <motion.div
        className={styles['kotak4']}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        animate={{ x: pos4.x, y: pos4.y }}
        transition={{ duration: 0.016, ease: 'linear' }}
      >
        <img
          src="/assets/image/bg-blur2.png"
          alt="background blur"
          width={900}
        />
      </motion.div> */}

      {/* Bagian konten */}
      <div className={styles['navbar-wrapper']}>
        <Navbar />
      </div>
      <div className={styles['main-content-wrapper']}>
        <MainHero />
      </div>
      <motion.div
        className={styles['second-content-wrapper']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <SecondHero />
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className={styles['explore-product-wrapper']}
      >
        <ExploreProduct />
      </motion.div> */}
      {/* <motion.div
        className={styles['hydroponic-haven-wrapper']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <HydroponicHavenSection />
      </motion.div> */}
      <motion.div
        className={styles['transform-garden-wrapper']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <TransformGardenSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className={styles['hydroponic-benefit-wrapper']}
      >
        <HydroponicBenefit />
      </motion.div>
      {/* <div style={{ margin: 100 }}>
        <SwiperSlider />
      </div> */}
      {/* <div style={{ margin: 100 }}>
        <SwiperSlider2 />
      </div> */}

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 100,
        }}
      >
        <Gallery />
      </div>

      <div className={styles['footer-wrapper']}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
