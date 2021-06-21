import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Filters from "../../components/filters";
import MovieItem from "../../components/movie-item";
import { useAppSelector } from "../../app/hooks";
import { selectMovies } from "./movies.slicer";
import { MOVIE_TYPES } from "../../app/enums";
import { useQuery } from "../../utils/use-query";

function MoviesList() {
  const [movieType, setMovieType] = useState(MOVIE_TYPES.POPULAR.toString());
  const movies = useAppSelector(selectMovies);
  const history = useHistory();
  const query = useQuery();

  useEffect(() => {
    const typeFromQuery = query.get("type");
    if (!typeFromQuery) {
      history.push(`?type=${MOVIE_TYPES.POPULAR}`);
    } else {
      setMovieType(typeFromQuery || MOVIE_TYPES.POPULAR.toString());
      console.log();
    }
  }, [query, history]);
  
  return (
    <main className="w-full mt-24 sm:mt-16 min-h-full px-10 py-8">
      <h2 className="text-2xl font-semibold mb-5">
        {movieType?.toUpperCase()} MOVIES
      </h2>
      <div className="w-full flex flex-wrap">
        <div className="w-full sm:min-w-1/5 sm:w-1/5">
          <Filters />
        </div>
        <div className="pl-8 w-full sm:min-w-4/5 sm:w-4/5">
          <div className="w-full flex justify-between flex-wrap sm:-mt-7">
            {movies?.length &&
              movies?.map((element) => (
                <MovieItem movie={element} key={element.id}></MovieItem>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MoviesList;
