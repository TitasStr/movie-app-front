import { API_URL } from '../utils/constants'

type Movie = {
  id: number;
  title: string;
  image_url: string;
};

export async function getMovies(setMovies: (movies: Movie[]) => void) {
  try {
    const response = await fetch(`${API_URL}/movies`, {
      method: "GET",
      headers: { token: localStorage.token }
    });
    if (response.ok) {
      const data: Movie[] = await response.json();
      setMovies(data);
    } else {
      throw new Error('Response error');
    }
  } catch (err: any) {
    console.error(err.message);
  }
}