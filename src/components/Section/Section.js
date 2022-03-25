import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
padding 25px 0`;

export default function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
