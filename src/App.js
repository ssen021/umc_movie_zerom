import React, { useEffect } from 'react';
import Movie from './Components/Movie';
import movies from './movieDummy';

function App() {
  useEffect(() => {
    const movieContainers = document.querySelectorAll('.movie-container');
    const desContainers = document.querySelectorAll('.des-container');

    movieContainers.forEach((movieContainer, index) => {
      movieContainer.addEventListener('mouseenter', () => {
        desContainers[index].style.display = 'block';
      });

      movieContainer.addEventListener('mouseleave', () => {
        desContainers[index].style.display = 'none';
      });

      // 마우스를 떠날 때 이벤트 리스너를 정리합니다.
      return () => {
        movieContainer.removeEventListener('mouseenter', () => {
          desContainers[index].style.display = 'block';
        });
        movieContainer.removeEventListener('mouseleave', () => {
          desContainers[index].style.display = 'none';
        });
      };
    });
  }, []); // 빈 배열을 전달하여 이펙트가 컴포넌트가 마운트될 때만 실행되도록 합니다.

  return (
    <div className="app-container">
      {movies.results.map((item, index) => (
        <div key={item.id} className="movie-container">
          <Movie title={item.title} poster={item.poster_path} vote_average={item.vote_average} overview={item.overview} />
        </div>
      ))}
    </div>
  );
}

export default App;
