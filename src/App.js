import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import moviedata from "./components/data";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState(moviedata);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <Navigation
        movies={movies}
        setMovies={setMovies}
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={setRating}
      ></Navigation>

      <MovieList movies={movies} search={search} rating={rating} />
    </div>
  );
}

export default App;
