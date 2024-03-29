import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

//const imagesURL = import.meta.env.VITE_IMG;
//const imagesURL = 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg';
const imagesURL = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;

