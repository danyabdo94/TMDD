import Filters from "../../components/filters";
import data from "../../mock.data";
import MovieItem from "../../components/movie-item";
import { useAppSelector } from "../../app/hooks";
import { selectMovies } from "./movies.slicer";

function MoviesList() {
  const movies = useAppSelector(selectMovies);
  return (
    <main className="w-full mt-24 sm:mt-16 min-h-full px-10 py-8">
      <h2 className="text-2xl font-semibold mb-5">Popular Movies</h2>
      <div className="w-full flex flex-wrap">
        <div className="w-full sm:min-w-1/5 sm:w-1/5">
          <Filters />
        </div>
        <div className="pl-8 w-full sm:min-w-4/5 sm:w-4/5">
          <div className="w-full flex justify-between flex-wrap sm:-mt-7">
            {(movies?.length) && movies?.map((element) => (
              <MovieItem movie={element} key={element.id}></MovieItem>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MoviesList;
