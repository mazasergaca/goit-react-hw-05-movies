import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useLocation,
  useNavigate,
  Route,
  Routes,
} from 'react-router-dom';
import { fetchMoviesById } from 'services/movie-api';
import { RotatingLines } from 'react-loader-spinner';
import makeIdFromSlug from 'services/slugs';
import defaultPoster from '../../images/not-found-poster.png';
import styled from 'styled-components';
import Spinner from 'components/Spinner';
import Container from 'components/Container';
import Section from 'components/Section';
import NotFoundMovies from 'components/NotFoundMovies';

const Cast = lazy(() => import('views/Cast'));
const Reviews = lazy(() => import('views/Reviews'));

const StyledButton = styled.button`
  display: inline-block;
  padding: 5px 15px;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: 'Paytone One', sans-serif;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: transparent;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: rgb(255, 65, 65);
    background-color: rgb(48, 48, 48);
  }
`;

const StyledArticle = styled.div`
  display: flex;
  margin-bottom: 15px;
  border: 1px solid #fff;
  border-radius: 6px;
  overflow: hidden;
`;

const StyledTitle = styled.h2`
  margin-bottom: 25px;
  font-family: 'Jura', sans-serif;
  font-size: 34px;
  color: #fff;
  text-align: center;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const StyledInfo = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  color: #fff;
`;

const StyledInfoName = styled.span`
  margin-bottom: 5px;
  font-size: 24px;
  color: #fff;
`;

const StyledAdditionalInfo = styled.h2`
  font-size: 34px;
  font-family: 'Jura', sans-serif;
  color: #fff;
  text-align: center;
`;

const StyledContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const StyledContainerSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const LinkStyled = ({ isActive }) => ({
  color: isActive ? 'rgb(255, 65, 65)' : 'rgb(250, 250, 250)',
});

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');

  const { slug } = useParams();
  const movieId = makeIdFromSlug(slug);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setStatus('pending');
    fetchMoviesById(movieId)
      .then(res => {
        setMovie(res);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, [movieId]);

  const onClickBack = () => {
    navigate(location?.state?.from?.location ?? '/movies');
  };

  return (
    <Section>
      <Container>
        <StyledButton type="button" onClick={onClickBack}>
          Go Back
        </StyledButton>
        {status === 'pending' && <Spinner />}
        {status === 'rejected' && <NotFoundMovies />}
        {movie && status === 'resolved' && (
          <>
            <StyledArticle>
              <div>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : defaultPoster
                  }
                  width="400px"
                  alt={movie.title}
                />
              </div>
              <StyledInfoContainer>
                <StyledTitle>{movie.title}</StyledTitle>

                <StyledInfoName>Genres:</StyledInfoName>
                <StyledInfo>
                  {movie.genres.map(genres => genres.name).join(', ')}
                </StyledInfo>

                <StyledInfoName>Release date:</StyledInfoName>
                <StyledInfo>{movie.release_date}</StyledInfo>

                <StyledInfoName>User score:</StyledInfoName>
                <StyledInfo>{movie.vote_average}</StyledInfo>

                <StyledInfoName>Overview:</StyledInfoName>
                <StyledInfo> {movie.overview}</StyledInfo>
              </StyledInfoContainer>
            </StyledArticle>
            <StyledAdditionalInfo>Additional information</StyledAdditionalInfo>
            <StyledContainerLinks>
              <NavLink to="cast" style={LinkStyled} className="nav-link">
                Cast
              </NavLink>
              <NavLink to="reviews" style={LinkStyled} className="nav-link">
                Reviews
              </NavLink>
            </StyledContainerLinks>

            <Suspense
              fallback={
                <StyledContainerSpinner>
                  <RotatingLines
                    width="100"
                    strokeColor="#fff"
                    strokeWidth="1"
                  />
                </StyledContainerSpinner>
              }
            >
              <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Routes>
            </Suspense>
          </>
        )}
      </Container>
    </Section>
  );
}
