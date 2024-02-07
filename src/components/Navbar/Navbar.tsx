/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../../store';
import { logout } from '../../features/auth/authSlice';
import styles from './Navbar.module.scss';
import React from 'react';
const Navbar = (): JSX.Element => {
  const { isAuth, username } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = (): void => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <nav className={styles.containerNavbar}>
      <p className={styles.navTitle}>MovieNest</p>
      <ul className={styles.navList}>
        {isAuth && <li className={styles.navItem}>Hi, {username}</li>}
        {isAuth && (
          <li className={styles.navItem} onClick={handleLogout}>
            Logout
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
