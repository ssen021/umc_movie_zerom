
import styled from 'styled-components';


export const Body = styled.div`
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(21, 21, 73);
  width: 100vw;
  height: 100vh;
`;

export const App_container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

`;

export const Movie_container = styled.div`
  background-color: rgba(85, 85, 148, 0.956);
  margin: 10px;
  width: 230px;
  height: 400px;
`;

export const Movie_section = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 400px;
`;

export const Poster = styled.img`
  width: 230px;
  height: 340px;
`;

export const Text_section = styled.div`
  display: flex;
  flex-direction: row;
  width: 230px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  color: white;
  width: 160px;
`;

export const Vote_average = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  color: white;
`;

export const Des_section = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 400px;
`;

export const Des_container = styled.div`
  background-color: black;
  width: 230px;
  height: 400px;
  opacity: 0.7;
  position: absolute;
  z-index: 1;
  display: ${(props) => (props.isHovered ? 'block' : 'none')};
`;

export const Des_title = styled.div`
  font-size: 14px;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 30px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
`;

export const Overview = styled.div`
  font-size: 14px;
  color: white;
  margin-left: 15px;
  margin-right: 12px;
  margin-top: 5px;
`;
