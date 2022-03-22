import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// cdfaaf13
const API_URL = 'http://www.omdbapi.com?apikey=cdfaaf13'
const movie = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    "Title": "Batman Begins",
    "Type": "movie",
    "Year": "2005",
    "imdbID": "tt0372784"
}

const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>

                <input type='text' placeholder='Search for a movie' value="Superman" onChange={() => { }} />
                <img src={SearchIcon} alt='Search' onClick={() => { }} />

            </div>

            {
                movies.length > 0 ? (
                    <div className='container'>
                        <MovieCard movie={movies[0]} />
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App;