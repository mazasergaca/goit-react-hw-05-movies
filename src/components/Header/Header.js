import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: rgb(0, 0, 0);
  border-bottom: 1px solid #fff;
`;

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
