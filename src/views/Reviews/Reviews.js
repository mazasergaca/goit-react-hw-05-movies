import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/movie-api';
import { useParams } from 'react-router-dom';
import makeIdFromSlug from 'services/slugs';
import styled from 'styled-components';
import defaultAvatar from '../../images/default-avatar.png';
import Spinner from 'components/Spinner';

const StylesContainerList = styled.div`
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  font-family: 'Jura', sans-serif;
  color: #fff;
`;

const StyledItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const StyledName = styled.span`
  font-size: 26px;
`;

const StyledReview = styled.p`
  font-size: 18px;
`;

const StyledAvatar = styled.img`
  border-radius: 50%;
  margin-right: 15px;
`;

const StyledContainerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const StyledNotFoundReviews = styled.p`
  font-size: 32px;
  color: #fff;
  text-align: center;
`;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  const { slug } = useParams();
  const movieId = makeIdFromSlug(slug);

  useEffect(() => {
    setStatus('pending');
    fetchMovieReviews(movieId).then(res => {
      setReviews(res);
      setStatus('resolved');
    });
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      {reviews?.results?.length > 0 && status === 'resolved' && (
        <StylesContainerList>
          <StyledList>
            {reviews.results.map(review => {
              return (
                <StyledItem key={review.id}>
                  <StyledContainerInfo>
                    <StyledAvatar
                      src={
                        review.author_details.avatar_path &&
                        review.author_details.avatar_path.includes('http')
                          ? review.author_details.avatar_path.slice(1)
                          : defaultAvatar
                      }
                      alt={review.author}
                      width="100"
                    />
                    <StyledName>{review.author}</StyledName>
                  </StyledContainerInfo>
                  <StyledReview>{review.content}</StyledReview>
                </StyledItem>
              );
            })}
          </StyledList>
        </StylesContainerList>
      )}
      {reviews?.results?.length === 0 && status === 'resolved' && (
        <StyledNotFoundReviews>
          We don't have any reviews for this movie
        </StyledNotFoundReviews>
      )}
    </>
  );
}
