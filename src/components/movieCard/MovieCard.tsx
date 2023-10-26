import styles from './MovieCard.module.css';

type Props = {
  title: string;
  image_url: string;
};

const MovieCard = ({ title, image_url }: Props) => {
  return (
    <div className={styles.movieCard}>
      <p className={styles.movieTitle}>{title}</p>
      <img className={styles.moviePoster} src={image_url} alt={title} />
    </div>
  );
};

export default MovieCard;