import React from 'react';
import Movie from './Components/Movie/Movie';
import movies from './movieDummy';
import { App_container, Movie_container } from './Components/Movie/Movie.style';

function App() {
  
  return (
    <App_container>
      {movies.results.map((item, index) => (
        <Movie_container key={item.id}>
          <Movie title={item.title} poster={item.poster_path} vote_average={item.vote_average} overview={item.overview} />
        </Movie_container>
      ))}
    </App_container>
  );
}

export default App;
