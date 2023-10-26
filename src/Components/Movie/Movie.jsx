
import { Body , Movie_container, Movie_section, Poster, Text_section, Title, Vote_average
  ,Des_container,Des_section, Des_title, Overview , App_container
} from './Movie.style';
import React, { useState } from 'react';

function Movie(props) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered); // 상태 값 확인

    return (
      <Body>
      <Movie_container 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <Des_container isHovered={isHovered}>
        <Des_title>{props.title}</Des_title>
        <Overview>{props.overview}</Overview>
      </Des_container>
        <Movie_section>
          <Poster src ={`https://image.tmdb.org/t/p/w1280/${props.poster}`} alt={props.title}/>
          <Text_section>
            <Title>{props.title}</Title>
            <Vote_average>{props.vote_average}</Vote_average>
          </Text_section>
        </Movie_section>
      </Movie_container>
      </Body>
    );
  }
  
  export default Movie
