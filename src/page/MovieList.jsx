import { useEffect, useState } from "react";
import { config } from "../data/constant";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.type ? params.type : "popular"
      }?language=ko-KR&api_key=${config.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [params.type]);
  return (
    <Container>
      <Title></Title>
      <Group>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie}></Card>
        ))}
      </Group>
    </Container>
  );
}

export default MovieList;

const Container = styled.div`
  padding: 0.3rem 3rem;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  margin: 2.5rem;
`;

const Group = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`;
