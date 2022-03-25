import { Oval } from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const StyledContainerSpinner = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Spinner() {
  return (
    <StyledContainerSpinner>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="rgb(255, 65, 65)"
        secondaryColor="#fff"
      />
    </StyledContainerSpinner>
  );
}
