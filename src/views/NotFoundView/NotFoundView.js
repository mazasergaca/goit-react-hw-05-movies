import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-top: 150px;
  font-size: 42px;
  color: #fff;
  text-align: center;
`;

export default function NotFoundView() {
  return <StyledTitle>404 NOT FOUND</StyledTitle>;
}
