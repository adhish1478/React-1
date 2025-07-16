import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: 2020 },
    { id: 3, title: "Matrix", release_date: 2001 },
    { id: 2, title: "avengers", release_date: 2010 },
    { id: 4, title: "endgame", release_date: 2018 },
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="search for movies...."
          value={searchQuery}
          onChange={(e => setSearchQuery(e.target.value))}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
