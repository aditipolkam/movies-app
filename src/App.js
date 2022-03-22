import { useEffect } from 'react';
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

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
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

            <div className='container'>
                <MovieCard movie={movie} />
            </div>
        </div>
    );
}

export default App;