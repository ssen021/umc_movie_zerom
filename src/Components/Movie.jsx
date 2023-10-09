function Movie(props) {
    return (
      <div className="movie_container">
        <div className="des-container">
          <div className ="des_section">
            <div className ="des_title">{props.title}</div>
            <div className ="overview">{props.overview}</div>
          </div>
        </div>
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