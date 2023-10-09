import React from 'react';
import Movie from './Components/Movie';
import movies from './movieDummy';

function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => (
        <div key={item.id} className="movie-container">
          <Movie title={item.title} poster={item.poster_path} vote_average={item.vote_average} overview={item.overview} />
        </div>
      ))}
    </div>
  );
}

export default App;

const movie_container = document.querySelectorAll('.movie_container');
const des_container = document.querySelectorAll('.des-container')

movie_container.forEach((movie_container, index) => {
  movie_container.addEventListener('mouseenter', () => {
    des_container[index].style.display = 'block';
  });

  movie_container.addEventListener('mouseleave', () => {
    des_container[index].style.display = 'none';
  });
});
