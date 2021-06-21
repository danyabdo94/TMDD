import Header from "./components/header";
import MoviesList from "./features/movies-list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./features/movie";
import { useAppDispatch } from "./app/hooks";
import { getMoviesAsync } from "./features/movies-list/movies.slicer";
import { MOVIE_TYPES } from "./app/enums";
function App() {
  const dispatch = useAppDispatch();
  dispatch(getMoviesAsync(MOVIE_TYPES.POPULAR));
  return (
    <div className="flex flex-wrap min-h-screen">
      <Router>
        <Header />
        <Switch>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
