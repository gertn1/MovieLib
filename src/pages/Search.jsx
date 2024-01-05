import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

//const searchURL = import.meta.env.VITE_SEARCH;
//const api_key = import.meta.env.VITE_API_KEY;

const searchURL = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'api_key=4459ee85fba02b50fa3f364154395c41';


import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
        
    const res = await fetch (url);

    const data = await res.json();

       setMovies(data.results);

};


useEffect(() => {

    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    
    
    getSearchedMovies(searchWithQueryURL);
   
}, [query]);



    return (
        <div className="container">
        <h2 className="title">
            Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">
          {movies.length === 0 && <p>Carregando</p>}
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    )
}
export default Search;