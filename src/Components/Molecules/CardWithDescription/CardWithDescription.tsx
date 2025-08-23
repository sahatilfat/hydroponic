import React, { useEffect } from 'react';
import styles from './CardWithDescription.module.scss';
import TiltCard from '@/Components/Molecules/TiltCard/TiltCard';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

type ICardWithDescription = {
  type?: 'primary' | 'secondary';
  imgUrl?: string;
};

const showFromLeftVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 1, scale: 1, x: '-100%', transition: { duration: 1 } },
};
const showFromRightVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 1, scale: 1, x: '100%', transition: { duration: 1 } },
};

const CardWithDescription: React.FC<ICardWithDescription> = ({
  type = 'primary',
  imgUrl,
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);
  return (
    <div className={styles['first-project']}>
      <motion.div
        variants={showFromLeftVariant}
        ref={ref}
        initial="hidden"
        animate={control}
      >
        {type === 'primary' && <TiltCard imgUrl={imgUrl} />}
      </motion.div>
      <motion.div
        variants={showFromRightVariant}
        ref={ref}
        initial="hidden"
        animate={control}
      >
        {type === 'secondary' && <TiltCard imgUrl={imgUrl} />}
      </motion.div>
    </div>
  );
};

export default CardWithDescription;
