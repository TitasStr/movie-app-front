import React from 'react';
import styles from './MovieCard.module.scss';

interface MovieCardProps {
  title: string;
  imageUrl: string;
}

const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { title, imageUrl } = props;
  return (
    <div className={styles.containerCard}>
      <img className={styles.cardImage} src={imageUrl} alt={title} />
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default MovieCard;
