import { useState, useEffect } from "react";
import { config } from "../data/constant";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";

function MovieList() {
  const [movies, setMovies] = useState([]);

  // 검색기능
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        params.type ? params.type : "popular"
      }?language=ko-KR&api_key=${config.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setKeyword("");
      });
  }, [params.type]);

  return (
    <Container>
      <SearchBox
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
      ></SearchBox>
      <Title></Title>
      <Group>
        {movies
          .filter(
            (movie) =>
              movie.original_title
                .toLowerCase()
                .includes(keyword.toLowerCase()) ||
              movie.title.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((movie) => (
            <Card key={movie.id} movie={movie}></Card>
          ))}
      </Group>
    </Container>
  );
}

export default MovieList;

const Container = styled.div`
  padding: 0 3rem 3rem;
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
