import React from 'react';
import styles from './ButtonDefault.module.scss';

type IButtonDefault = {
  title?: string;
  onClick?: () => void;
  type?: 'green' | 'white';
};

const ButtonDefault: React.FC<IButtonDefault> = ({
  title = 'Explore Now',
  onClick,
  type = 'green',
}) => {
  return (
    <div
      className={`${styles['container']} ${
        type === 'white' && styles['white']
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default ButtonDefault;
