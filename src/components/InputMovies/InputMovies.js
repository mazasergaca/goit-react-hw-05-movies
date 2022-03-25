import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RiSearch2Fill } from 'react-icons/ri';

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 25px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 300px;
  font-family: 'Jura', sans-serif;
  font-size: 24px;
  color: #fff;
`;

const StyledInput = styled.input`
  margin-top: 5px;
  padding: 2px 10px;
  font-family: 'Jura', sans-serif;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  height: 25px;
`;

const StyledButton = styled.button`
  display: flex;
  padding: 0;
  height: 25px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.3);
  }
`;

export default function InputMovies({ value, onChange, onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel>
        <span>Enter movie name</span>
        <StyledInput type="text" value={value} onChange={onChange} />
      </StyledLabel>
      <StyledButton type="submit">
        <RiSearch2Fill size="100%" color="#fff" />
      </StyledButton>
    </StyledForm>
  );
}

InputMovies.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
