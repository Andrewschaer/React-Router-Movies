import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';



import SavedList from './Movies/SavedList.js';
import MovieList from  './Movies/MovieList.js';
import Movie from './Movies/Movie.js'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Switch>
        <Route exact path='/'>
          <MovieList movies={movieList}/>
        </Route>
        <Route path='/movies/:id'>
          <Movie movie={movieList}/>
        </Route> 
      </Switch>
      {/* <Route>
      </Route> */}
    </div>
  );
}
