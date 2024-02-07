import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.containerNavbar}>
      <p className={styles.navTitle}>MovieNest</p>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Hi, Joe</li>
        <li className={styles.navItem}>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
