import React from 'react';
import styled from 'styled-components';
import cryFaceImage from '../../images/not-found-movie.png';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 32px;
  color: #ffffff;
`;

export default function NotFoundMovies() {
  return (
    <StyledContainer>
      <StyledTitle>Not found movie</StyledTitle>
      <img src={cryFaceImage} alt="crying face" width="200" />
    </StyledContainer>
  );
}
