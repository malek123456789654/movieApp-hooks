import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, search, rating }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        flexWrap: "wrap",
      }}
    >
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()) &&
            movie.rate >= rating
        )
        .map((movie) => (
          <MovieCard movie={movie}></MovieCard>
        ))}
    </div>
  );
}

export default MovieList;
