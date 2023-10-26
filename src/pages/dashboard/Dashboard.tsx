import { useState, useEffect } from 'react';
import Styles from './Dashboard.module.css';
import { getMovies } from '../../services/moviesService';
import SearchBar from '../../components/searchBar/SearchBar';
import MovieCard from '../../components/movieCard/MovieCard';
import Navbar from '../../components/navbar/Navbar';

type Movie = {
    id: number;
    title: string;
    image_url: string;
};

const Dashboard = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        getMovies(setMovies);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <Navbar isAuth={true} />
            <SearchBar
                search={search}
                handleSearch={handleSearch}
            />
            <div className={Styles.movieContainer}>
                {filteredMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        image_url={movie.image_url}
                    />
                ))}
            </div>
        </>
    )
}

export default Dashboard