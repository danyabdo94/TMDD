import Header from "./components/header";
import MoviesList from "./features/movies-list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movie from "./features/movie";

function App() {
  return (
    <div className="flex flex-wrap min-h-screen">
      <Header />
      <Router>
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
