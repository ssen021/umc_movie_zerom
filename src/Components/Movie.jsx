function Movie(props) {
    return (
      <div className="movie-container">
        <div className="movie_section">
          <img className="poster" src ={`https://image.tmdb.org/t/p/w1280/${props.poster}`} alt={props.title}/>
          <div className ="text_section">
            <div className ="title">{props.title}</div>
            <div className ="vote_average">{props.vote_average}</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Movie