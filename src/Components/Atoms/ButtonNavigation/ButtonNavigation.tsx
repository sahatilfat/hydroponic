import React from 'react';
import styles from './ButtonNavigation.module.scss';

type IButtonNavigation = {
  title?: string;
  onClick?: () => void;
  isActive?: boolean;
};

const ButtonNavigation: React.FC<IButtonNavigation> = ({
  title = 'Home',
  onClick,
  isActive = false,
}) => {
  return (
    <div
      className={`${styles['container']} ${isActive && styles['active']}`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default ButtonNavigation;
