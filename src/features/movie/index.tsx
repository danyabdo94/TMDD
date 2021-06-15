import { mockCredits, mockMovie } from "../../mock.data";
import MovieCard from "./movie-card";

function Movie() {
  const movie = mockMovie;
  const crew = mockCredits.crew.slice(0, 6);

  return (
    <>
      <MovieCard movie={movie} crew={crew}/>
    </>
  );
}

export default Movie;
