import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Cell className="left">
        <Link to="/">
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
            alt="로고"
          />
        </Link>
        <Link to="/movies/popular">인기순</Link>
        <Link to="/movies/top_rated">별점순</Link>
        <Link to="/movies/upcoming">개봉예정순</Link>
      </Cell>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2.5rem;
  padding: 0.5rem 0;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  &.left {
    gap: 3rem;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 80px;
  cursor: pointer;
  display: block;
`;
