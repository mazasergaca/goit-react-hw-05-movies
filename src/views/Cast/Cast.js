import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultAvatar from '../../images/default-avatar.png';
import { fetchMovieCredits } from 'services/movie-api';
import styled from 'styled-components';
import Spinner from 'components/Spinner';

const StylesContainerList = styled.div`
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 10px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: -5px;
  color: #fff;
  list-style: none;
  font-family: 'Jura', sans-serif;
`;

const StyledArticle = styled.li`
  display: flex;
  margin: 5px;
  width: calc((100% - 35px) / 3);
`;

const StyledInfoActor = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const StyledInfoCategory = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
`;

const StyledInfoValue = styled.span`
  font-size: 24px;
  margin-bottom: 15px;
`;

export default function Cast() {
  const [actors, setActors] = useState(null);
  const [status, setStatus] = useState('idle');

  const { id } = useParams();

  useEffect(() => {
    setStatus('pending');
    fetchMovieCredits(id).then(res => {
      setActors(res);
      setStatus('resolved');
    });
  }, [id]);

  return (
    <>
      {status === 'pending' && <Spinner />}
      {actors && status === 'resolved' && (
        <StylesContainerList>
          <StyledList>
            {actors.cast.map(actor => {
              return (
                <StyledArticle key={actor.id}>
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                        : defaultAvatar
                    }
                    alt={actor.name}
                    height="225"
                    width="150px"
                  />
                  <StyledInfoActor>
                    <StyledInfoCategory>Full name:</StyledInfoCategory>
                    <StyledInfoValue>{actor.name}</StyledInfoValue>
                    <StyledInfoCategory>Character:</StyledInfoCategory>
                    <StyledInfoValue>{actor.character}</StyledInfoValue>
                  </StyledInfoActor>
                </StyledArticle>
              );
            })}
          </StyledList>
        </StylesContainerList>
      )}
    </>
  );
}
