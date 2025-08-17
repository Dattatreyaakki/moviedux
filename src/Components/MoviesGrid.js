import React from "react";
import '../styles.css';
import { useState,useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid(){
    const [movies, setMovies] = useState([]);
    const [search,setSearch] = useState("");
    const [genres,setGenres] = useState("All Genres");
    const [ratings,setRatings] = useState("All");

    useEffect(() => {
       fetch('movies.json').then((response) => response.json()).then(data=>setMovies(data))
    }, []);

    const handleOnChange = (e) =>{
        setSearch(e.target.value);
    }

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <input type="text" className="search-input" placeholder="Search for a movie..." value={search} onChange={handleOnChange}/>
         
         <div className="filter-bar">
            <div className="filter-slot">
                <label>Genre:</label>
               <select className="filter-dropdown" value={genres} onChange={(e) => setGenres(e.target.value)}>
                  <option>All Genres</option>
                  <option>Action</option>
                  <option>Comedy</option>
                  <option>Drama</option>
               </select>
            </div>
          <div className="filter-slot" value={ratings} onChange={(e) => setRatings(e.target.value)}>
            <label>Rating:</label>
               <select className="filter-dropdown" value={ratings} onChange={(e) => setRatings(e.target.value)}>
                  <option value="">All</option>
                  <option value="good">Good</option>
                  <option value="ok">Ok</option>
                  <option value="bad">Bad</option>
               </select>
            </div>
         </div>
  



        <div className="movies-grid">
            {filteredMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </div>
    );
}