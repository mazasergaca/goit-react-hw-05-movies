import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { shape } from 'prop-types';

const StyledContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const StyledPoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

const StyledArticle = styled.li`
  border: 1px solid #fff;
  margin: 5px;
  list-style: none;
  width: calc((100% - 40px) / 4);
  border-radius: 6px;
  overflow: hidden;
`;

const StyledNameMovie = styled.p`
  padding: 10px;
  font-size: 28px;
  font-family: 'Jura', sans-serif;
  color: #fff;
  text-align: center;
`;

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(movie => (
        <StyledArticle key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
            }}
            state={{ from: { location } }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <StyledContainer>
              <StyledPoster
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </StyledContainer>

            <StyledNameMovie>
              {movie.title ? movie.title : movie.name}
            </StyledNameMovie>
          </Link>
        </StyledArticle>
      ))}
    </StyledList>
  );
}

MoviesList.propTypes = {
  movie: PropTypes.arrayOf(shape),
};
