import React from "react";
import '../styles.css';

export default function MoviesGrid({ movie }) {

    const HandleError = (e) => {
        e.target.src = 'images/default.jpg';
    }

    const getRating=(rating)=>{
        const num = Number(rating);
        if(num >= 8){
            return 'rating-good'
        }
        else if(num >= 5){
            return 'rating-ok'
        }
        else{
            return 'rating-bad'
        }

     
      
    }

    return(
        <div key={movie.id} className="movie-card">
               <div className="movie-card-image">
                   <img src={`images/${movie.image}`} alt={movie.image} onError={HandleError} />
                </div>
                <div className="movie-card-info">
                   <h3 className="movie-card-title">{movie.title}</h3>
                   <p className="movie-card-description">{movie.description}</p>
                   <p className={`movie-card-rating ${getRating(movie.rating)}`}>{movie.rating}</p>
                </div>
               </div>
    );
}