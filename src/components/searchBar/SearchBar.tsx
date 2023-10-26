import { ChangeEvent } from 'react';
import styles from './SearchBar.module.css';

type Props = {
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ search, handleSearch }: Props) => {
  return (
    <div className={styles.containerSearch}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for movies..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;