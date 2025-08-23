import React from 'react';
import styles from './Layout.module.scss';
type ILayout = {
  children?: React.ReactNode;
};

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['content-wrapper']}>{children}</div>
    </div>
  );
};

export default Layout;
