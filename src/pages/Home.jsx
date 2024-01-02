import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

// const moviesURL = import.meta.env.VITE_API;
// const apiKey = import.meta.env.VITE_API_KEY;

const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=4459ee85fba02b50fa3f364154395c41';



const Home =() => {

    const [topMovies , setTopMovies] = useState ([]);

    const getTopRatedMovies = async (url) => {
        
        const res = await fetch (url);

        const data = await res.json();

           setTopMovies(data.results);
    
    };


    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        
        
        console.log(topRatedUrl);
        getTopRatedMovies(topRatedUrl);
       
    }, []);
    
    return (
        <div className="container">
          <h2 className="title">Melhores filmes:</h2>
          <div className="movies-container">
            {topMovies.length > 0 &&
              topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      );
    };
    
    export default Home;