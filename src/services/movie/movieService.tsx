import { MOVIE_API_URL } from '../../utils/constants';
import { type Movie } from '../../utils/interfaces';

export async function fetchMovies(searchTerm: string): Promise<Movie[]> {
  const url = `${MOVIE_API_URL}/search?term=${encodeURIComponent(searchTerm)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`No movies found`);
  }

  const data = await response.json();
  return data as Movie[];
}
