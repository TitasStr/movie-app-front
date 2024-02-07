import { MOVIE_API_URL } from '../../utils/constants';
import { type Movie } from '../../utils/interfaces';

export async function fetchMovies(searchTerm: string): Promise<Movie[]> {
  try {
    const url = `${MOVIE_API_URL}/search?term=${encodeURIComponent(
      searchTerm,
    )}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as Movie[];
  } catch (err: any) {
    console.error('Failed to fetch movies:', err);
    throw err;
  }
}
