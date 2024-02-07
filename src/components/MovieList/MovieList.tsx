import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store';
import { type Movie } from '../../utils/interfaces';
import styles from './MovieList.module.scss';
import { fetchMovies } from '../../services/movie/movieService';

const MovieList = (): JSX.Element => {
  const { searchTerm } = useSelector((state: RootState) => state.movie);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async (): Promise<void> => {
      const fetchedMovies: Movie[] = await fetchMovies(searchTerm as string);
      setMovies(fetchedMovies);
    };

    void loadMovies();
  }, [searchTerm]);

  return (
    <div className={styles.containerMovieList}>
      <div className={styles.movieListCard}>
        {movies.map((movie: Movie, index: number) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            imageUrl={movie.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
