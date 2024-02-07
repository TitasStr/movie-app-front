import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../features/movie/movieSlice';
import styles from './Searchbar.module.scss';

const Searchbar = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setSearch(newValue);
    dispatch(setSearchTerm(newValue));
  };

  return (
    <div className={styles.containerSearchbar}>
      <h2>Search for Movies</h2>
      <input
        type="text"
        placeholder="Type a movie name..."
        value={search}
        onChange={handleSearch}
        className={styles.searchBarInput}
      />
    </div>
  );
};

export default Searchbar;
