import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import styles from './MovieList.module.scss'

const MovieList = (): JSX.Element => {
  return (
    <div className={styles.containerMovieList}>
      <div className={styles.movieListCard}>
        <MovieCard title='testtitle' imageUrl='testurl' />
        <MovieCard title='testtitle' imageUrl='testurl' />
        <MovieCard title='testtitle' imageUrl='testurl' />
      </div>
    </div>
  );
};

export default MovieList;
