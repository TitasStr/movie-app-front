import React from 'react';
import styles from './MovieCard.module.scss';

const MovieCard = (): JSX.Element => {
  return (
    <div className={styles.containerCard}>
      <img className={styles.cardImage} src="" alt="Image" />
      <div className={styles.cardTitle}>Image title</div>
    </div>
  );
};

export default MovieCard;
