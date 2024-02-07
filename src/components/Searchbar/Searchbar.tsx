import React from 'react';
import styles from './Searchbar.module.scss';
const Searchbar = (): JSX.Element => {
  return (
    <div className={styles.containerSearchbar}>
      <h2>Search for Movies</h2>
      <input className={styles.searchBarInput} />
    </div>
  );
};

export default Searchbar;
