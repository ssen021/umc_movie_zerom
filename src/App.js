import React from 'react';
import Movie from './Components/Movie';
import movies from './movieDummy';

function App() {
  return (
    <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie key={item.id} title={item.title} poster={item.poster_path} vote_average ={item.vote_average}/>
            )
          })
        }
      </div>
    
  );
}

export default App;
