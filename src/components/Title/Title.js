import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 50px;
  color: rgb(255, 255, 255);
  font-family: 'Jura', sans-serif;
  letter-spacing: 0.06em;
  text-align: center;
  margin-bottom: 20px;
`;

export default function Title() {
  return <StyledTitle>Trending today</StyledTitle>;
}
