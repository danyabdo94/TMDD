import Header from "./components/header";
import MoviesList from "./features/movies-list/movies-list";

function App() {
  return (
    <div className="flex flex-wrap min-h-screen">
      <Header />
      <MoviesList />
    </div>
  );
}

export default App;
